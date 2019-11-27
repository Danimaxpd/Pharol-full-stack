export class MsgErrorsHelpers {
  public static concatValidationsMsg(erros: {details: []}) {
    const res = [];
    erros.details.forEach(element => {
      res.push(element['message']);
    });
    return res.join(', ');
  }
}
