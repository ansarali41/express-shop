const shopService = require("../services/Shop.service");

module.exports.create = async (req, res) => {
  try {
    const data = req.body;
    const shop = await shopService.create(data);
    return res.status(200).json(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const data = await shopService.findAll();
    return res.status(200).json(data);
  }
  catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
}


module.exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await shopService.findOne(id);
    return res.status(200).json(data);
  }
  catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await shopService.delete(id);
    return res.status(200).json(data)
  }
  catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const data = await shopService.update(id, updateData);
    return res.status(200).json(data)
  }
  catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }


}