import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const App = (): JSX.Element => {
  return (
    <div>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};

export default App;
