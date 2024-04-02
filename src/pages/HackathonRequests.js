import React from "react";
import BaseLayout from "../components/BaseLayout";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Alert,
} from "@material-tailwind/react";
import { REQUESTS } from "../constants";
import HackathonRequestCard from "../components/HackathonRequestCard";

const HackathonRequests = () => {
    return (
        <BaseLayout>
            <div className="container py-4 mx-auto  px-1 flexjustify-center">
                <Typography
                    variant="h3"
                    className="mb-3 text-incedo-secondary-600"
                >
                    Hackathon Requests
                </Typography>
                <div className="flex flex-col gap-y-4">
                    {REQUESTS.length === 0 ? (
                        <div className="w-fit mx-auto justify-self-center">
                            <Alert
                                variant="ghost"
                                className="flex justify-center items-center"
                            >
                                <Typography className="w-full justify-center flex">
                                    No Requests
                                </Typography>
                            </Alert>
                        </div>
                    ) : (
                        REQUESTS?.map((request) => (
                            <HackathonRequestCard
                                name={request.name}
                                email={request.email}
                                details={request.details}
                            />
                        ))
                    )}
                </div>
            </div>
        </BaseLayout>
    );
};

export default HackathonRequests;
