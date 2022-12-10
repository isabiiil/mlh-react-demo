import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomizedTimeline from './components/Timeline';
import Thumbnail from './components/Thumbnail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("something");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const styles = {
    projects: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
  };

  return (
    <div>
      <h1>Projects</h1>
      <div style={styles.projects} onClick={handleOpen}>
        <Thumbnail title="Thumbnail" image="http://source.unsplash.com/random/1920x1080" />
        <Thumbnail title="Hello World" image="http://source.unsplash.com/random/1920x1080" />
        <Thumbnail title="Hi from MLH" image="http://source.unsplash.com/random/1920x1080" />
        <Thumbnail title="Global Hack Week" image="http://source.unsplash.com/random/1920x1080" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <CustomizedTimeline />
    </div>
  );
}