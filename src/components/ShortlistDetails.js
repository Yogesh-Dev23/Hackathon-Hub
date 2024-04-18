import React, { useEffect, useState } from "react";

import { USER, HACKATHONS } from "../constants";
import {
    Button,
    Card,
    CardBody,
    Typography,
    Progress,
    IconButton,
    Dialog,
    DialogBody,
    DialogHeader,
    DialogFooter,
} from "@material-tailwind/react";

import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import {
    acceptTeam,
    fetchPanelistTeamsByHackathonId,
    rejectTeam,
} from "../features/team/teamSlice";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";
import { selectUserDetails, selectUserToken } from "../features/user/userSlice";
import { toast } from "react-toastify";

const ShortlistDetails = ({ hackathons, selectedIdeaId, IDEAS }) => {
    const dateConverter = (date) => {
        const shortdate = new Date(date).toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        const time = new Date(date).toLocaleTimeString("en-GB", {
            hour12: false,
        });

        return `${shortdate}, ${time}`;
    };

    const dispatch = useDispatch();

    // const hackathons = useSelector((state) => state.hackathon.hackathons.data);
    // const user = USER;
    const userData = useSelector(selectUserDetails);
    const token = useSelector(selectUserToken);
    // useSelector((state) => state.user.login?.data?.data);
    // console.log(hackathons);

    // useEffect(() => {
    //     dispatch(fetchHackathons());
    // }, []);

    //use hackathonSlice useSelector to fetch data of assigned hackthon here
    const [selectedHackathon, setSelectedHackathon] = useState(
        hackathons?.find(
            (hackathon) => hackathon.hackathonId === userData?.assignedHackathon
        )
    );

    const [selectedIdea, setSelectedIdea] = useState(
        IDEAS?.find((idea) => idea.teamId === selectedIdeaId)
    );
    // console
    // console.log(selectedIdea);
    // console.log(IDEAS);
    // console.log(selectedIdeaId);

    useEffect(() => {
        // console.log(selectedIdeaId)
        setSelectedIdea(
            IDEAS?.find((idea) => idea?.teamId === selectedIdeaId) || IDEAS[0]
        );
    }, [selectedIdeaId, IDEAS]);

    const [openRules, setOpenRules] = useState(false);

    const handleOpenRules = () => {
        setOpenRules(!openRules);
    };

    const handleIdeaAccept = async () => {
        // console.log(teamId + "idea accepted");
        try {
            await toast.promise(
                dispatch(
                    acceptTeam({
                        teamId: selectedIdea?.teamId,
                        token,
                    })
                ).unwrap(),
                {
                    pending: "Accepting idea...",
                    success: "Idea accepted successfully!",
                    error: {
                        render({ data }) {
                            return `Error: ${data?.message}`;
                        },
                    },
                }
            );
            await dispatch(
                fetchPanelistTeamsByHackathonId({
                    hackathonId: userData?.assignedHackathon,
                    panelistid: userData?.userId,
                    token,
                })
            ).unwrap();
        } catch (error) {
            console.log(error?.message);
        }
    };
    const handleIdeaReject = async (teamId) => {
        // console.log(teamId + "idea rejected");
        try {
            await toast.promise(
                dispatch(
                    rejectTeam({
                        teamId: selectedIdea?.teamId,
                        token,
                    })
                ).unwrap(),
                {
                    pending: "Rejecting idea...",
                    success: "Idea rejected successfully!",
                    error: {
                        render({ data }) {
                            return `Error: ${data?.message}`;
                        },
                    },
                }
            );
            await dispatch(
                fetchPanelistTeamsByHackathonId({
                    hackathonId: userData?.assignedHackathon,
                    panelistid: userData?.userId,
                    token,
                })
            ).unwrap();
        } catch (error) {
            console.log(error?.message);
        }
    };

    return (
        <>
            {/* {!loading &&  */}
            <div className="md:px-2 w-full">
                {selectedHackathon ? (
                    <Card shadow={false} className="mb-3">
                        <CardBody>
                            <div className="w-full grid md:grid-cols-6">
                                <Typography
                                    className="md:col-span-5 mb-1 px-2 font-semibold flex text-incedo-secondary-600 text-left justify-start"
                                    variant="h2"
                                    // color="black"
                                >
                                    {selectedHackathon?.name || ""}
                                </Typography>
                                <div className="md:col-span-1 py-1 flex items-center justify-end">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="m-1"
                                        onClick={handleOpenRules}
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                            <div className="mb-1 w-full rounded-2xl p-2 py-1 text-incedo-tertiary-900">
                                <Typography variant="h4">
                                    Theme: {selectedHackathon?.theme || ""}
                                </Typography>
                            </div>
                            {/* <div className="w-full px-2">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography color="blue-gray" variant="h6">
                                        Shortlist Deadline
                                    </Typography>
                                    <Typography color="blue-gray" variant="h6">
                                        50% Elapsed
                                    </Typography>
                                </div>
                                <Progress value={50} />
                            </div> */}
                        </CardBody>
                    </Card>
                ) : null}

                {IDEAS.length !== 0 && selectedIdeaId ? (
                    <Card
                        shadow={false}
                        className="md:min-h-[52.2vh] md:max-h-[52.2vh] overflow-auto"
                    >
                        <CardBody>
                            <div className="w-full grid md:grid-cols-6">
                                <div className="md:col-span-5 w-full rounded-2xl p-2 py-1 text-incedo-tertiary-900">
                                    <Typography variant="h3">
                                        {selectedIdea?.ideaTitle || ""}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        className=" text-gray-600"
                                    >
                                        {selectedIdea?.ideaDomain || ""}
                                    </Typography>
                                </div>
                                <div className="md:col-span-1 px-2 flex flex-col items-center justify-end">
                                    <Button
                                        onClick={handleIdeaAccept}
                                        disabled={
                                            selectedIdea?.status !== "submitted"
                                        }
                                        className="bg-green-400 mb-2"
                                        size="sm"
                                        fullWidth
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        onClick={handleIdeaReject}
                                        disabled={
                                            selectedIdea?.status !== "submitted"
                                        }
                                        className="bg-red-700"
                                        size="sm"
                                        fullWidth
                                    >
                                        Reject
                                    </Button>
                                </div>
                            </div>

                            <div className="w-full mt-1 rounded-2xl p-2">
                                <Typography className="">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                selectedIdea?.ideaBody
                                            ),
                                        }}
                                    ></span>
                                </Typography>
                            </div>
                        </CardBody>
                    </Card>
                ) : null}
                <Dialog open={openRules} handler={handleOpenRules}>
                    <DialogHeader>
                        <Typography
                            className=" px-2 font-semibold flex text-incedo-secondary-600 text-left justify-start"
                            variant="h2"
                            // color="black"
                        >
                            {selectedHackathon?.name || ""}
                        </Typography>
                    </DialogHeader>
                    <DialogBody>
                        <div className="overflow-auto  max-h-[60vh]">
                            <div className="w-full mt-1 rounded-2xl p-2">
                                <Typography variant="h4">
                                    Description
                                </Typography>
                                <Typography>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                selectedHackathon?.description
                                            ),
                                        }}
                                    ></span>
                                </Typography>
                            </div>
                            <div className="w-full mt-1 rounded-2xl p-2">
                                <Typography variant="h4">Rules</Typography>
                                <Typography>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                selectedHackathon?.rules
                                            ),
                                        }}
                                    ></span>
                                </Typography>
                            </div>
                            <div className="w-full rounded-2xl p-2">
                                <Typography variant="h4">
                                    Judging Criteria
                                </Typography>
                                <Typography>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                selectedHackathon?.judgingCriteria
                                            ),
                                        }}
                                    ></span>
                                </Typography>
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpenRules}
                            className="mr-1"
                        >
                            <span>Close</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
            {/* } */}
        </>
    );
};

export default ShortlistDetails;
