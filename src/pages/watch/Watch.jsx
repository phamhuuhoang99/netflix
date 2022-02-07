import { ArrowBackIosOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/2kxjMApnJc0"
      />
    </div>
  );
};

export default Watch;
