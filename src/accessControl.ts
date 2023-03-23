import { newModel, StringAdapter } from 'casbin';

export const model = newModel(`
  [request_definition]
  r = sub, obj, act

  [policy_definition]
  p = sub, obj, act

  [role_definition]
  g = _, _

  [policy_effect]
  e = some(where (p.eft == allow))

  [matchers]
  m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
  p, admin, roofmaster, (list)|(edit)|(delete)|(show)|(create)
  p, admin, overview, (list)|(edit)|(delete)|(show)
  p, admin, costtracker, (list)|(edit)|(delete)|(show)
  p, admin, forecasttracker, (list)|(edit)|(delete)|(show)
  p, admin, users, (list)|(edit)|(delete)|(show)|(create)

  p, editor, roofmaster, list
  p, editor, canvases, (list)|(edit)
`);
