import React, { Component } from 'react'
import axios from 'axios'


class ListBroadBands extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      loading: true,
      data: []
    }
  }

   async componentDidMount () {
    const res = await axios.get('/api/list-all-broadband/');
    this.setState({ loading: false, data: res.data })
  }

    render() {

        let {
          loading,
          data
        } = this.state

        if (loading) {
          return <div>Loading...</div>
        }

        return (
            <div className="content">
              {
                data.map((item, i) => 
                  <div className="cards" key={i}>
                    <ul className="bundles">
                      {item.bundles.map((name, k) => 
                          <li key={k}>{name}</li>
                      )}
                      </ul>
                    <div className="price">R$ {item.total}</div>
                  </div>

              )}
              <style jsx>{`
                .cards {
                  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 
                              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
                              0px 3px 1px -2px rgba(0, 0, 0, 0.12);
                  padding: 16px;
                  margin-bottom: 10px;
                  background: white;
                }
                .price {
                  font-weight: bold;
                }
                .bundles {
                  display: inline-block;
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                .bundles li {
                  float: left;
                }
                .bundles li:not(:last-child):after {
                  content: " + ";
                }
              `}</style>
              <style global jsx>{`
                body {
                  font-family: "arial";
                  background: #eeeeee;
                }
              `}</style>
            </div>
        )
    }
}

export default ListBroadBands