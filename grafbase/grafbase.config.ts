import { graph, connector, config } from '@grafbase/sdk'


const g = graph.Standalone()

const pg = connector.Postgres('nextjs13_flexibble', {
  url: g.env('DATABASE_URL'),
})

g.datasource(pg)

export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    // OpenID Connect
    // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
    // providers: [oidc],
    rules: (rules) => {
      rules.public()
    },
  },
})
