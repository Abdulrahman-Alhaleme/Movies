
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Row } from "reactstrap";




function App() {



  const [Data, setdata] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [FilterData, setFilterData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3500/data").then((res) => {
      setdata(res.data);
      console.log(res.data)
      setFilterData(res.data)
    });





  }, []);


  const filterDataByName = (searchTerm) => {
    const filteredData = Data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredData);
  }

  console.log(Data)

  return (
    <>
      <Container>
        <Row>

          <input style={{ border: "1px solid black" }} name="firstName"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterDataByName(e.target.value);
            }
            }
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto place-items-center py-12'>
            {FilterData?.map((item, index) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg card">
                <img
                  className="w-full"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">
                    {item.description}
                  </p>
                </div>
              </div>

            ))}
          </div>
        </Row>
      </Container>
    </>

  );

}

export default App;
