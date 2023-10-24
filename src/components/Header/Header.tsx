import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar
          alt="User Profile"
          src="https://ada-school.org/wp-content/uploads/2022/02/ada-school-favicon.svg"
        />
        <Typography style={{ marginLeft: "1rem" }} variant="h6">
          Travel form
        </Typography>
        <IconButton edge="end" color="inherit"></IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
