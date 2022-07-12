import connectors from "../../connectors";

const validateAccount = async (message, sender) => {
  console.log("validateAccount - mess", message);

  const account = message.args;
  const connector = new connectors[account.connector](account.config);
  await connector.init();

  try {
    console.log("validateAccount - TRY");
    const info = await connector.getInfo();
    await connector.unload(); // unload the connector again, we just checked if it works but have no persistence

    return { data: { valid: true, info: info } };
  } catch (e) {
    console.log("validateAccount - CATCH", e);
    console.error(e);
    return { data: { valid: false, error: e.message } };
  }
};

export default validateAccount;
