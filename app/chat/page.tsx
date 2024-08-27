    "use client";

    import "@fontsource/oswald/200.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    TextField,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { BrainCircuit, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

    const Navbar = styled(AppBar)({
    backgroundColor: "#2C3E50",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "'Oswald', sans-serif",
    });

    const ChatSection = styled(Box)({
    width: "100%",
    height: "100vh",
    backgroundColor: "#ECF0F1",
    color: "#FFFFFF",
    margin: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto",
    });

    export default function Chat() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const [messages, setMessages] = useState([
        {
        role: "assistant",
        content: `Hi! I'm the ProfGuide AI support assistant. How can I help you today?`,
        },
    ]);
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        setMessages((messages) => [
        ...messages,
        { role: "user", content: message },
        { role: "assistant", content: "" },
        ]);

        setMessage("");
        const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
        });

        if (!response.body) {
        throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = "";

        function processText({
        done,
        value,
        }: ReadableStreamReadResult<Uint8Array>): Promise<string> {
        if (done) {
            return Promise.resolve(result);
        }
        const text = decoder.decode(value || new Uint8Array(), { stream: true });

        setMessages((messages) => {
            let lastMessage = messages[messages.length - 1];
            let otherMessages = messages.slice(0, messages.length - 1);
            return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
            ];
        });

        return reader.read().then(processText);
        }

        return reader.read().then(processText);
    };

    return (
        <>
        {/* Navbar */}
        <Navbar sx={{ width: "100%" }}>
            <Toolbar
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: isMobile ? "0 6px" : "0 40px",
            }}
            >
            <Typography
                variant="h6"
                component="div"
                sx={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: "500",
                color: "#F1B22A",
                }}
            >
                ProfGuide AI
            </Typography>

            {isMobile ? (
                <>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={toggleMenu}
                    sx={{
                    padding: "20px",
                    }}
                >
                    <Menu />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={menuOpen}
                    onClose={closeMenu}
                    sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "#2C3E50",
                        color: "white",
                    },
                    }}
                >
                    <List>
                    <ListItem
                        button
                        onClick={closeMenu}
                        component={Link}
                        href="/#home"
                    >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={closeMenu}
                        component={Link}
                        href="/#about"
                    >
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={closeMenu}
                        component={Link}
                        href="/#working"
                    >
                        <ListItemText primary="Working" />
                    </ListItem>
                    </List>
                </Drawer>
                </>
            ) : (
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                >
                <Link href="/#home" passHref>
                    <Button
                    sx={{
                        color: "#ffffff",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        marginRight: "20px",
                    }}
                    >
                    Home
                    </Button>
                </Link>
                <Link href="/#about" passHref>
                    <Button
                    sx={{
                        color: "#ffffff",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        marginRight: "20px",
                    }}
                    >
                    About
                    </Button>
                </Link>
                <Link href="/#working" passHref>
                    <Button
                    sx={{
                        color: "#ffffff",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        marginRight: "20px",
                    }}
                    >
                    Working
                    </Button>
                </Link>
                </Box>
            )}
            </Toolbar>
        </Navbar>

        <ChatSection id="chat">
            <Stack
            direction={"column"}
            width={isMobile ? "90%" : "1000px"}
            height={isMobile ? "calc(100vh - 60px)" : "500px"}
            p={isMobile ? 1 : 2}
            spacing={isMobile ? 2 : 3}
            mt={isMobile ? 9 : 10}
            sx={{
                backgroundColor: "#344B63",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Stack
                direction={"column"}
                spacing={2}
                flexGrow={1}
                overflow="auto"
                maxHeight="100%"
                sx={{
                width: "100%",
                }}
            >
                {messages.map((message, index) => (
                <Box
                    key={index}
                    display="flex"
                    justifyContent={
                    message.role === "assistant" ? "flex-start" : "flex-end"
                    }
                >
                    {message.role === "assistant" && (
                    <Avatar
                        sx={{
                        backgroundColor: "#162330",
                        color: "#ffffff",
                        marginRight: 2,
                        }}
                    >
                        <BrainCircuit />
                    </Avatar>
                    )}
                    <Box
                    sx={{
                        backgroundColor:
                        message.role === "assistant" ? "#162330" : "#193047",
                        color: "white",
                        borderRadius: 5,
                        pt: 2,
                        pb: 2,
                        pl: 5,
                        pr: 5,
                        maxWidth: isMobile ? "90%" : "75%",
                        lineHeight: 1.5,
                    }}
                    >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                    </Box>
                </Box>
                ))}
            </Stack>
            <Stack
                direction={isMobile ? "column" : "row"}
                spacing={isMobile ? 1 : 2}
                sx={{ width: "100%", flexWrap: isMobile ? "wrap" : "nowrap" }}
            >
                <TextField
                label="Message"
                placeholder="e.g., I would like you to list professors who excel in Computer Science."
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                    sx: {
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DEA204",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DEA204",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DEA204",
                    },
                    },
                }}
                InputLabelProps={{
                    sx: {
                    color: "#DEA204",
                    "&.Mui-focused": {
                        color: "#DEA204",
                    },
                    },
                }}
                />
                <Button
                variant="contained"
                onClick={sendMessage}
                sx={{
                    backgroundColor: "#DEA204",
                    "&:hover": { backgroundColor: "#A57801" },
                    color: "#ffffff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "500",
                    fontSize: { xs: "14px", md: "16px" },
                    mt: isMobile ? 2 : 0,
                }}
                >
                Send
                </Button>
            </Stack>
            </Stack>
        </ChatSection>
        </>
    );
    }