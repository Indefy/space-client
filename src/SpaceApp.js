import React from "react";
import "./Style/SpaceApp.css";
import { useQuery, gql } from "@apollo/client";
import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	Grid,
} from "@mui/material";

const GET_MISSIONS = gql`
	query GetMissions {
		missions {
			id
			url
			name
			description
			startDate
			endDate
			launchSite
			destination
		}
	}
`;

const SpaceApp = () => {
	const { loading, error, data } = useQuery(GET_MISSIONS);

	if (loading) return <p>Loading...</p>;
	if (error) {
		console.error("Error fetching missions:", error);
		return (
			<Container maxWidth="md">
				<Box my={4}>
					<Typography variant="h5" color="error">
						Error fetching missions data. Please try again later.
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{error.message}
					</Typography>
					{error.graphQLErrors &&
						error.graphQLErrors.map(({ message }, i) => (
							<Typography key={i} variant="body2" color="textSecondary">
								{message}
							</Typography>
						))}
					{error.networkError && (
						<Typography variant="body2" color="textSecondary">
							{error.networkError.message}
						</Typography>
					)}
				</Box>
			</Container>
		);
	}

	return (
		<Container maxWidth="md">
			<Box my={4}>
				<Typography variant="h3" component="h1" gutterBottom>
					Space Missions
				</Typography>
				<Grid container spacing={4}>
					{data.missions.map((mission) => (
						<Grid item xs={12} key={mission.id}>
							<Card elevation={3}>
								<CardContent>
									<Typography variant="h5" component="h2" gutterBottom>
										{mission.name}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<strong>Description:</strong> {mission.description}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<strong>Start Date:</strong> {mission.startDate}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<strong>End Date:</strong> {mission.endDate}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<strong>Launch Site:</strong> {mission.launchSite}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<strong>Destination:</strong> {mission.destination}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
									>
										<a
											href={mission.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											More Info
										</a>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<CardContent>
					<div className="footer">
						<p>
							Site made by Adi Booker, Data collected from{" "}
							<a href="https://www.nasa.gov/">Nasa</a>
						</p>
					</div>
				</CardContent>
			</Box>
		</Container>
	);
};

export default SpaceApp;
