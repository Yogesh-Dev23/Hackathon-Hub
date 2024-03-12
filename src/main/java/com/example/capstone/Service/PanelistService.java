package com.example.capstone.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.TeamDetailsToPanelistDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.HackathonNotExistsException;
import com.example.capstone.Exceptions.UnauthorizedException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.PanelistRepository;

@Service
public class PanelistService {
	@Autowired
	private PanelistRepository panelistRepository;

	public Panelist createPanelist(User user, Hackathon hackathon) {
		Panelist panelist = new Panelist();
		panelist.setHackathon(hackathon);
		panelist.setUser(user);
		panelistRepository.save(panelist);
		return panelist;
	}

	public synchronized void updatePanelist(Panelist panelist) {
		panelistRepository.save(panelist);
	}

	public List<TeamDetailsToPanelistDTO> getTeamNamesByPanelistIdAndHackathonId(Integer panelistId,
			Integer hackathonId) {
		Panelist panelist = panelistRepository.findById(panelistId).orElse(null);
		LocalDateTime currentTime = LocalDateTime.now();
		if (panelist == null) {
			throw new UserNotFoundException("Panelist not found");
		}
		if (currentTime.isAfter(panelist.getHackathon().getIdeaSubmissionDeadline())
				&& currentTime.isBefore(panelist.getHackathon().getShortListDeadLine())) {
			if (panelist.getHackathon().getHackathonId().equals(hackathonId)) {
				return panelist.getTeam().stream().map(team -> {
					TeamDetailsToPanelistDTO teamDTO = new TeamDetailsToPanelistDTO();
					teamDTO.setTeamId(team.getTeamId());
					teamDTO.setIdeaBody(team.getIdeaBody());
					teamDTO.setIdeaDomain(team.getIdeaDomain());
					teamDTO.setIdeaTitle(team.getIdeaTitle());
					teamDTO.setTeamName(team.getName());
					return teamDTO;
				}).collect(Collectors.toList());
			} else {
				throw new HackathonNotExistsException("hackathon not found");
			}
		} else if (currentTime.isAfter(panelist.getHackathon().getShortListDeadLine())) {
			throw new UnauthorizedException("Idea reviewing is no longer allowed");
		} else {
			throw new UnauthorizedException("Idea reviewing is not started");
		}
	}
}
