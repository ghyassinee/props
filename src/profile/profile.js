import react from "react";
import PropTypes from 'prop-types';

function Profile(props) {
    return (
        <div>
      <div>{props.Name} </div>
      <div>{props.Bio} </div>
      <div>{props.Profession} </div>
      <div>{props.children} </div>
      <button onClick={props.alert}>Alert</button>
      </div>
    );
  }
  
  Profile.defaultProps={
    Name:"GHOUL Yassine",
     Bio:"23 yo",
     Profession :"Battal"
  }
  
  Profile.propTypes={
    Name:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
  }
  

  export default Profile;
  