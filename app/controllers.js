export default class Controllers {

  index(req, res){
    res.send([])
  }

  show(req, res){
    res.send(req.params.id)
  }

  create(req, res){
    res.send(req.body)
  }

  update(req, res){
    res.send({
      id: req.params.id,
      data: req.body
    })
  }

  delete(req, res){
    res.send(req.params.id)
  }

}
