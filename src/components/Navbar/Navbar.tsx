"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import Tooltip from "@mui/material/Tooltip";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import profilepivc from "../../../public/images/autquiaut.png";
import ico from "../../../public/images/ico.jpg";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {

	};

	const handleLogout = async () => {
		setAnchorEl(null);
		router.push('/login');
		// setLoading(true)
	};

	const iconstyle = "blue";
	return (
		<>
			<div className="fixed bottom-0  w-full">
				<Box sx={{ flexGrow: 1 }} className="mt-20 mb-20 bg-slate-50">
					<AppBar
						className="flex justify-between h-15 textslate-50 bg-slate-50">
						<Toolbar className="flex justify-between bg-slate-50">
							<div className="flex ">
								<Image
									width={30}
									height={20}
									src={ico}
									alt="pic"
									className="rounded-lg items-center justify-center"
								/>
								<h6 className="hidden pl-4 text-blue-800 text-2sm font-semibold xs:hidden sm:hidden md:block lg:block">INSURANCE PRODUCTS</h6>
							</div>
							<div className="flex">
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Help"
										arrow
									>
										<IconButton
											size="large"
											edge="start"
											sx={{
												'&:hover': {
													backgroundColor: (theme) => theme.palette.info.main
												}
											}}
											aria-label="menu"
										>
											<HelpOutlineRoundedIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Contact us"
										arrow
										className="text-blue-800">
										<IconButton
											size="large"
											edge="start"
											aria-label="menu"
											sx={{
												'&:hover': {
													backgroundColor: (theme) => theme.palette.info.main
												}
											}}>
											<AddIcCallSharpIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="About"
										arrow
										className="text-blue-800">
										<IconButton
											size="large"
											edge="start"
											aria-label="menu"
											sx={{
												'&:hover': {
													backgroundColor: (theme) => theme.palette.info.main
												}
											}}>
											<FeedSharpIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Change password"
										arrow
										className="text-slate-50">
										<IconButton
											size="large"
											edge="start"
											aria-label="menu"
											sx={{
												'&:hover': {
													backgroundColor: (theme) => theme.palette.info.main
												}
											}}>
											<LockOpenSharpIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit">

									<Image
										width={30}
										height={20}
										src={profilepivc}
										alt="pic"
										className="rounded-lg items-center justify-center"
									/>
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}>
									<MenuItem onClick={handleClose} className="bg-slate-50">Profile</MenuItem>
									<MenuItem onClick={handleClose} className="bg-slate-50">My account</MenuItem>
									<MenuItem onClick={handleLogout} className="bg-slate-50">
										Log out
									</MenuItem>
								</Menu>
							</div>
						</Toolbar>
					</AppBar>
				</Box>
			</div>
		</>
	);
}
