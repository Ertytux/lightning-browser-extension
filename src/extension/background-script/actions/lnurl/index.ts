import utils from "../../../../common/lib/utils";

const pay = async (message, sender) => {
  const response = await utils.openPrompt(message);
  if (response.data.confirmed) {
    return "You've paid!";
  }
};

export { pay };