import React, { Component } from 'react';
import './App.css';
import CallApi from './ApiCall';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		
		// CallApi({
		// 	endpoint: 'product', method: 'POST', body: {
		// 		name: 'oppo121',
		// 		price: 5000,
		// 		Status: true
		// 	}
		// }).then(res => console.log('post', res));
		this.props.callApiRequest();

		// CallApi({ endpoint: 'product', method: 'GET', body: null }).then(response => {
		// 	// handle success
		// 	this.props.onFetchAPI(response.data);
		// 	console.log(response);
		// 	// console.log('data', data[0]);
		// })
		// axios.get('http://localhost:3000/product/')
		// 	.then( response => {
		// 		// handle success
		// 		this.setState({
		// 			data: response.data,
		// 		});
		// 		// console.log(response.data);
		// 		// console.log('data', data[0]);
		// 	})
		// 	.catch(function (error) {
		// 		// handle error
		// 		console.log(error);
		// 	})
		// 	.then(function () {
		// 		// always executed
		// 	});
	}

	render() {
		const { data = [] } = this.state;
		const name = this.props.getDataFromAPI.length > 0 ? this.props.getDataFromAPI[0].name : '';
		console.log('data', name)
		console.log('data123', this.props.getDataFromAPI);

		return (

			<div>
				<div className="navbar">
					<a className="navbar-brand" >Call API</a>
					<ul className="nav navbar-nav">
						<li className="active">
							<a>Trang Chu</a>
						</li>
						<li>
							<a>Quan Li San Pham</a>
						</li>
					</ul>
				</div>

				<div className="container">

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

							<button type="button" className="btn btn-info">Them San Pham</button>

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h3 className="panel-title">Danh sach san pham</h3>
								</div>
								<div className="panel-body">

									<table className="table table-bordered table-hover">
										<thead>
											<tr>
												<th>STT</th>
												<th>MA SP</th>
												<th>TEN</th>
												<th>GIA</th>
												<th>TRANG THAI</th>
												<th>HANH DONG</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{name}</td>
												<td>1</td>
												<td>1</td>
												<td>1</td>
												<td>

													<span className="label label-warning">Con Hang</span>

												</td>
												<td>

													<button type="button" className="btn btn-success">Sua</button>

													<button type="button" className="btn btn-danger">Xoa</button>


												</td>
											</tr>
										</tbody>
									</table>

								</div>
							</div>

						</div>
					</div>

				</div>
			</div>


		);
	}
}

const mapStateToProps = (state) =>{
	//console.log(state.TastReminders);
	return {
	  getDataFromAPI : state.FetchApi
	}
  }
  const mapDispatchToProps = (dispatch, props)=>{
	return {
		callApiRequest: () => {
			dispatch(actions.callApiRequest());
		}
	}
  }
  
export default connect(mapStateToProps, mapDispatchToProps) (App);

