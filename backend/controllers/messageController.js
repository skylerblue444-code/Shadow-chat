exports.sendMessage = (req, res) => {
  res.json({ message: "Send message placeholder" });
};

exports.getMessages = (req, res) => {
  res.json({ messages: [] });
};