module.exports = (params, body) => {
  return {
    board_id: params.id,
    password: body.password,
    data: { title: body.title, content: body.content },
  };
};
