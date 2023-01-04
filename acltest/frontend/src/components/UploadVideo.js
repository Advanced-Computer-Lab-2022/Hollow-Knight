import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { Button, Card, fabClasses, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';




const UploadVideo = () => {
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [linkError, setLinkError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const { user } = useAuthContext();
    const uploadvideo = async (e) => {
        e.preventDefault()

        setLinkError(false)
        setDescriptionError(false)

        if (!link) {
            setLinkError(true)
        }

        if (!description) {
            setDescriptionError(true)
        }

        if (link && description) {
            console.log("here")
            const video = { link, description }
            const params = new URLSearchParams(window.location.search);
            const subtitleId = params.get('subtitleId');
            const response = await fetch(`/api/instructors/uploadvideo?subtitleId=${subtitleId}`, {
                method: 'POST',
                body: JSON.stringify(video),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }

            })
            const man = await response.json()
            if (response.ok) {
                setLink('')
                setDescription('')
                setSuccess(true)

            } if (!response.ok) {
                console.log("error", response)
            }

        }
    }

    return (
        <Container
            sx={{ marginTop: 7 }}
        >
            <Card sx={{ borderRadius: 5 }}>
                <form className="UploadVideo" onSubmit={uploadvideo} noValidate >


                    <Typography variant="h3" align="center" sx={{ marginBottom: 4, marginTop: 6 }}>
                        Upload Video
                    </Typography>
                    <Box sx={{ marginLeft: 35, marginTop: 8, marginBottom: 6 }}>


                        <Typography>Video Link : </Typography>


                        <TextField
                            onChange={(e) => setLink(e.target.value)}
                            label="Video Link"
                            variant='outlined'
                            color='primary'
                            type="text"
                            fullWidth
                            required
                            error={linkError}
                            value={link}
                            sx={{
                                '& > :not(style)': { marginBottom: 3, marginTop: 1, width: 600 },
                            }}
                        />


                        <Typography>Description : </Typography>


                        <TextField
                            onChange={(e) => setDescription(e.target.value)}
                            label="Description"
                            variant='outlined'
                            color='primary'
                            type="text"
                            fullWidth
                            required
                            error={descriptionError}
                            value={description}
                            sx={{
                                '& > :not(style)': { marginBottom: 3, marginTop: 1, width: 600 },
                            }}
                        />


                        <Box

                            sx={{ width: 590 }}>


                            <Collapse in={success}>
                                <Alert
                                    severity="success"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="large"
                                            onClick={() => {
                                                setSuccess(false);
                                            }}
                                        >

                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    <AlertTitle fontSize={20}>Success</AlertTitle>
                                    <strong > Discount has been Added   </strong>
                                </Alert>
                            </Collapse>
                        </Box>

                        <Button variant="contained" type="submit" sx={{ marginLeft: 65,marginTop:3 }}>Upload</Button>

                    </Box>
                </form>

            </Card>
        </Container>
    )

}

export default UploadVideo