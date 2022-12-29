import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { Button, Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';


const UploadVideo = () => {
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useAuthContext();
    const uploadvideo = async (e) => {
        e.preventDefault()

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

        }

    }

    return (
        <Container
            sx={{ marginTop: 7 }}
        >
            <Card sx={{ borderRadius: 5 }}>
                <form className="UploadVideo" onSubmit={uploadvideo} >


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
                            value={description}
                            sx={{
                                '& > :not(style)': { marginBottom: 3, marginTop: 1, width: 600 },
                            }}
                        />



                        <Button variant="contained" type="submit" sx={{ marginLeft: 65, marginTop: 6 }}>Upload</Button>

                    </Box>
                </form>

            </Card>
        </Container>
    )

}

export default UploadVideo