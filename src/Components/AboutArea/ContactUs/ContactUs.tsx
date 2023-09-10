import ContactMailIcon from '@mui/icons-material/ContactMail';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">

            <form>

                <Typography variant="h3"> Contact Us &nbsp; <ContactMailIcon fontSize="large" /> </Typography>

                <TextField label="Name" variant="outlined" className="TextBox" />

                <TextField label="Email" type="email" variant="outlined" className="TextBox" />

                <TextField label="Phone" type="tel" variant="outlined" className="TextBox" />

                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />} className="Flex" />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary"> Send &nbsp; <ForwardToInboxIcon /> </Button>
                    <Button type="reset" color="secondary">Clear &nbsp; <HighlightOffIcon /> </Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default ContactUs;
