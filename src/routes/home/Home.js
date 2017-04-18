/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Loading from '../../components/Loading'

class Home extends React.Component {


  render() {
    return (
      <main>
        <section>
          <h1>
            This section is server-side rendered.
          </h1>
        </section>
        <Loading />
        <section>
          <h2>
            This section is <em>only</em> client-side rendered.
          </h2>
        </section>
        
        <style jsx>{`
          section {
            align-items: center;
            display: flex;
            height: 50vh;
            justify-content: center;
          }
        `}</style>
      </main>
    );
  }
}

export default Home;
