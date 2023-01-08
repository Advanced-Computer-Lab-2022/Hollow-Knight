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

const PreviewVideo = () => {

  
    const [link, setLink] = useState('')
    
    const [linkError, setLinkError] = useState(false)

    const [success, setSuccess] = useState(false)
    const { user } = useAuthContext();
    const uploadvideo = async (e) => {
        e.preventDefault()

        setLinkError(false)
     

        if (!link) {
            setLinkError(true)
        }


        if (link ) {
            console.log("here")
            const video = { link}
            const params = new URLSearchParams(window.location.search);
            const courseId = params.get('courseId');
            const response = await fetch(`/api/instructors/addpreviewvideo?courseId=${courseId}`, {
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
                        Upload Preview Video
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
                                    <strong > Video Has been Added to the course content   </strong>
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
  
  export default PreviewVideo