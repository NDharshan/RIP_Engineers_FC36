// srn
import AddContent from './component/AddContent';
import Chart from './component/AssetChart';
import DisplayBen from './component/DisplayBen';
import Drawer from './component/Drawer';
import NavBar from './component/NavBar';
import ProportionChart from './component/ProportionChart';
import ProfilePicture from './images/pokemon.png';

function App() {
  return (
    <div>
        <NavBar />
        <br/><br/>
          <div className='bg-pink-50 flex flex-row content-evenly'>
            <div className="h-screen w-full flex justify-center content-around items-center bg-rose-50 ">
              {/* <Card>
                <BaseForm />
              </Card> */}
              <AddContent />
              {/* <Drawer /> */}
              <div className='py-12 px-12 flex flex-col'>
                <div className='flex flex-row content-around'>
                  <Chart className="w-1/5 align-center  h-full md:h-auto md:w-3/5 xl:w-2/5"/>
                  <Chart className="w-1/5 align-center  h-full md:h-auto md:w-3/5 xl:w-2/5"/>
                    
                </div>
                <ProportionChart className="w-2/5 h-full md:h-auto md:w-3/5 xl:w-2/5"/>
              </div>

              <div className='py-12 px-12 h-4/5 w-2/5 bg-white flex flex-col'>
              <h2 className="mb-4 text-3xl center font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-2xl dark:text-white" >Benificiaries</h2>
                <DisplayBen names={
                  localStorage.getItem('benNames').split(",")
                  //   [
                  //   "Kamala Srinivas",
                  //   "Padma Sridhar",
                  //   "Vasudev",
                  //   "Padma Sridhar",
                  //   "Vasudev",
                  //   "Ramaa Trivikram"
                  // ]
                } />
                  
              </div>
          </div>
        </div>
    </div>

  );
}

export default App;
