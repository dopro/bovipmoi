// axios
import axios from "axios";

const domain = "localhost";

export default axios.create({
  domain,
  // You can add your headers here
});
