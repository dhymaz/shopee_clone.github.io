import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { BsSearch, BsQuestionCircle as QuestionIcon,BsBell as BellIcon } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { FaFacebook as Fb, FaTwitter as Twitter } from "react-icons/fa";
import { AiFillInstagram as Ig } from "react-icons/ai";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teks : 'nama'
    }
  }

  componentDidMount () {
    return true;
  }
  
  shouldComponentUpdate (nextProps, nextState) {
   return true; 
  }

  render () { 
    return (  
        <div className="App">
            <div className="red_header">
                <div className="row">
                <div className="col col-7 mt-2 ml-3 jaga_jarak" >
                  <ul className='tulisan_atas'>
                    <li className="tulisan_atas_item link">Halaman Utama</li>
                    <li className="tulisan_atas_item link">Mulai Jual</li>
                    <li className="tulisan_atas_item link">Download</li>
                    <li className="tulisan_atas_item">
                      Ikuti kami di <Fb title="Kunjungi facebook kami" className='list_sosmed'/><Ig title="Kunjungi instagram kami" className='list_sosmed' size="1.2em"/><Twitter title="Kunjungi twitter kami" className='list_sosmed'/>
                    </li>
                  </ul>
                </div>
                <div className="col col-5 mt-2 ml-3 jaga_jarak" >
                    <ul className='tulisan_atas_kanan'>
                      <li ><BellIcon className='list_sosmed' />Notifikasi</li>
                      <li className="mr-3"><QuestionIcon className='list_sosmed'/>Bantuan</li>
                      <li className="link" style={{'borderRight':'1px solid white','paddingRight':'20px'}}><strong>Daftar</strong></li>
                      <li className="link" style={{'paddingLeft':'0px'}}><strong>Log In</strong></li>
                    </ul>
                </div>
              </div>
              <div className="row">
                <div className="col col-2 mt-2 ml-6 jaga_jarak_baris_dua" >
                    <img className="logo" src={'https://d1otfi4uhdq3fm.cloudfront.net/wp-content/uploads/2020/03/20182126/Shopee-logo-white.png'}></img>
                </div>
                <div className="col col-7 mt-3 ml-6 jaga_jarak_baris_dua" >
                    <div className="col col-12 bg-light">
                        <div className="form-inline" style={{'height':'45px'}}>
                            <form class="row g-1">
                              <div className="col-11">
                                <label for="staticEmail2" className="visually-hidden">Email</label>
                                <input type="text" style={{'borderColor':'white'}}  className="form-control highlight" id="staticEmail2" placeholder="Temukan barangmu disini..."/>
                              </div>
                              <div className="col-1">
                                <button type="submit" className="btn mb-3" style={{'width':'90%','backgroundColor':'#ff9808','color':'white'}}>
                                    <BsSearch/>
                                </button>
                              </div>
                            </form>
                        </div>
                    </div>
                    <div className="col col-12">
                      <ul style={{"padding":"0","margin":"0"}} className="list_kategory">
                        <li><small>Pakaian Pria</small></li>
                        <li><small>Pakaian Wanita</small></li>
                        <li><small>Pakaian Anak Laki-laki</small></li>
                        <li><small>Pakaian Anak Perempuan</small></li>
                        <li><small>Gadget</small></li>
                        <li><small>Perlengkapan Dapur</small></li>
                        <li><small>Alat Berkebun</small></li>
                      </ul>
                    </div>
                </div>
                <div className="col col-3 mt-3 ml-6" >
                      <MdShoppingCart size="2em"/>
                </div>
              </div>
            </div>
        </div>
      )
  }
}

export default App;
