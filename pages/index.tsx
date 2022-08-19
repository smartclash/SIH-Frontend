import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="hero is-fullheight has-background-info-light">
      <div className="hero-body">
        <div className="container">
          <div className="column is-half is-offset-8">
            <div className="card">
              <div className="card-content">
                <h1 className="title">Auth Page</h1>
                <form action="">
                  <div className="field">
                    <label htmlFor="email" className='label'>Email</label>
                    <div className="control">
                      <input type="email" name="email" id="email" className="input" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input type="submit" className='button is-info is-fullwidth is-outlined ' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
