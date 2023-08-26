import { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { counterActions } from '../redux/State';
import Select from 'react-select';
import { Container, Nav, Navbar, NavDropdown, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { TfiSearch } from 'react-icons/tfi';
import 'bootstrap/dist/css/bootstrap.min.css';
import airbnb from '../images/airbnb.png';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"

import '../style/MainNavbar.css';

export default function MainNavbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0)
  const [searchDesti, setSearchDesti] = useState(false);
  const [modalFilterButton, setModalFilterButton] = useState(null);
  const [inputValue, setInputeValue] = useState("");
  let [children, setChildren] = useState(0);
  let [infants, setInfants] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const adultsQuantity = useSelector((state) => state.counter.value);
  const dispacth = useDispatch();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false)


  const openNavModal = (id) => {
    setModalOpen(!modalOpen)
    modalOpen ? setModalId(id) : setModalId(0)
  }
  const handleDestiKeyDown = (event) => {
    event.key === 'Enter' ? setSearchDesti(true) : setSearchDesti(false)
  }
  const handleModalFilterBtnClick = (id) => {
    setModalFilterButton(id)
  }



  const increaeHandler = () => {
    dispacth(counterActions.increaseCount());
  }


  const decreaseHandler = () => {
    dispacth(counterActions.decrementCount());
  }

  const inputValueHandler = (e) => {
    setInputeValue(e.target.value);
  }

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ]

  const childrenAdd = () => {
    setChildren(children + 1)
  }

  const childrenLess = () => {
    if (children <= 0) {
      return
    }
    else {
      setChildren(children - 1)
    }
  }

  const infantsAdd = () => {
    setInfants(infants + 1)
  }

  const infantsLess = () => {
    if (infants <= 0) {
      return
    }
    else {
      setInfants(infants - 1)
    }
  }

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
    console.log(openLogin);
  }


  const toggleSignup = () => {
    setOpenSignup(!openSignup)
  }

  return <Fragment>
    <Navbar expand="lg" className="bg-body-tertiary" id='mainNav'>
      <Container fluid>
        <Navbar.Brand href='/'><img src={airbnb} alt='nav logo' height='30vw' width='30vh' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className='navSearchButton'>
          <button className="btn" onClick={() => openNavModal(1)} >Anywhere</button>
          <button className="btn" onClick={() => openNavModal(2)} >Any week</button>
          <button className="btn" onClick={() => openNavModal(3)} >Add guests</button>
          <button className="btn btn-danger" onClick={() => openNavModal(0)} ><TfiSearch /></button>
        </div>

        <div className='navTopRight row me-2'>

          <div className="col-8">
            <Link to='/about' type='button'>Airbnb your home</Link>
          </div>
          <div className="col-4">

            <Nav>
              <NavDropdown eventKey={1}
                title={
                  <div className="navDropDownButton">
                    <AiOutlineMenu />
                    <BsPersonFill />
                  </div>
                }
                id="basic-nav-dropdown" drop={'start'} >
                <NavDropdown.Item eventKey={1.1}><Link to='/signup'>Sign up</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey={1.2}><Link to='/login'>Log in</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey={1.3}>Airbnb your home</NavDropdown.Item>
                <NavDropdown.Item eventKey={1.4}>Help Center</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </div>
        </div>

      </Container>
    </Navbar>
    <Modal show={modalOpen}
      onHide={() => setModalOpen(false)}
      aria-labelledby="example-custom-modal-styling-title"
      id='NavModal'>
      <Navbar expand="lg" className="bg-body-tertiary" id='mainNav'>
        <Container fluid>
          <Navbar.Brand href='/'><img src={airbnb} alt='nav logo' height='30vw' width='30vh' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <div className='modalNavSearchButton'>
            <button className="btn" onClick={() => openNavModal(0)} >Stays</button>
            <button className="btn" onClick={() => openNavModal(0)} >Experience</button>
          </div> */}

          <div id='modalFilter'>
            <button className={modalFilterButton === 1 ? 'active' : ''} onClick={() => handleModalFilterBtnClick(1)}>
              <div>Where</div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search destination"
                  className="me-2"
                  aria-label="Search"
                  onKeyDown={handleDestiKeyDown}
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </button>
            <button className={modalFilterButton === 2 ? 'active' : ''} onClick={() => handleModalFilterBtnClick(2)}>
              <div>Check in</div>
              {/* <div>Add dates</div> */}
              {/* {
            (modalFilterButton === 2 ) &&
            <div>
              <Calendar date={new Date()}/>
            </div>
          } */}
              <input type='date' />
            </button>
            <button className={modalFilterButton === 3 ? 'active' : ''} onClick={() => handleModalFilterBtnClick(3)}>
              <div>Check out</div>
              {/* <div>Add dates</div> */}
              {/* {
            (modalFilterButton === 3) &&
            <div>
              <Calendar date={new Date()}/>
            </div>
          } */}
              <input type='date' />
            </button>
            <button className={modalFilterButton === 4 ? 'active' : ''} onClick={() => handleModalFilterBtnClick(4)}>
              <div>
                <div>Who</div>
                <div>Add guests</div>
              </div>
              <button>Search</button>
            </button>
          </div>
          {
            modalFilterButton === 4 &&
            <div id='guestModal'>
              <div className='tab3MainHold flex flex-col'>
                <div className='adultsKidsHold flex-col flex text-lg font-medium fof'>
                  <p> Adults  </p>
                  <p>Children</p>
                  <p>Infants  </p>
                  <p> Pets </p>
                </div>

                <div className='adultCriteriaHold flex flex-col relative'>
                  <p className=' text-gray-400'> Ages 13 or above </p>
                  <p className=' text-gray-400'> Ages 2-12 </p>
                  <p className=' text-gray-400'> Under 2 </p>
                  <p className=' text-gray-400'> Select pet friendly </p>
                </div>


                <div className='divideLineHold flex flex-col'>
                  <p className='navLine'>  </p>
                  <p className='navLine'>  </p>
                  <p className='navLine'>  </p>
                </div>

                <div className='btnControlsPlus flex flex-col relative'>
                  <AiOutlinePlusCircle className='fss' onClick={increaeHandler} />
                  <AiOutlinePlusCircle className='fss' onClick={childrenAdd} />
                  <AiOutlinePlusCircle className='fss' onClick={infantsAdd} />
                </div>

                <div className='btnControlMinus flex flex-col relative cursor-pointer' id='btnmin'>
                  <AiOutlineMinusCircle className='fss' onClick={decreaseHandler} />
                  <AiOutlineMinusCircle className='fss' onClick={childrenLess} />
                  <AiOutlineMinusCircle className='fss' onClick={infantsLess} />

                </div>

                <div className='navQtyHold relative'>
                  <p className=' w-3'> {adultsQuantity} </p>
                  <p className=' w-3'> {children}</p>
                  <p className=' w-3'>{infants} </p>
                </div>


                <div className='selectWrapper'>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="outline-none"
                  />
                </div>



              </div>
            </div>
          }

          <div className='navTopRight row me-2'>

            <div className="col-8">
              <Link to='/about' type='button'>Airbnb your home</Link>
            </div>
            <div className="col-4">

              <Nav>
                <NavDropdown eventKey={1}
                  title={
                    <div className="navDropDownButton">
                      <AiOutlineMenu />
                      <BsPersonFill />
                    </div>
                  }
                  id="basic-nav-dropdown" drop={'start'} >
                  <NavDropdown.Item eventKey={1.1}><Link to='/signup'>Sign up</Link></NavDropdown.Item>
                  <NavDropdown.Item eventKey={1.2}><Link to='/login'>Log in</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey={1.3}>Airbnb your home</NavDropdown.Item>
                  <NavDropdown.Item eventKey={1.4}>Help Center</NavDropdown.Item>

                </NavDropdown>
              </Nav>
            </div>
          </div>

        </Container>
      </Navbar>



    </Modal>
    {/* <LogInModal isOpen={openLogin} toggle={toggleLogin} />
    <SignUpModal isOpen={openSignup} toggle = {toggleSignup}/> */}

  </Fragment>
}