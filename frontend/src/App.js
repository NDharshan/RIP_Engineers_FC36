// srn
import AddContent from './component/AddContent';
import Chart from './component/AssetChart';
import ProportionChart from './component/ProportionChart';
import ProfilePicture from './images/pokemon.png';

function App() {
  return (
    <div className='bg-pink-50'>
      <div className="w-screen h-screen flex justify-center max-w-fit content-around items-center bg-rose-50 ">
        {/* <Card>
          <BaseForm />
        </Card> */}
        <AddContent />
        <div className='py-12 px-12'>
          <div className='flex flex-row space-around'>
            <Chart className="w-full align-center  h-full md:h-auto md:w-3/5 xl:w-2/5"/>
            <Chart className="w-full align-center  h-full md:h-auto md:w-3/5 xl:w-2/5"/>
              
          </div>
          <ProportionChart className="w-full h-full md:h-auto md:w-3/5 xl:w-2/5"/>
        </div>
        <div className='py-12 px-12 bg-white flex flex-col'>
          <div class="flex items-center space-x-10 py-2">
          <img className="w-10 h-10 rounded-full" src={ProfilePicture} alt={"Carlie Anglemire"}/>
              <div class="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div class="text-md text-gray-500 dark:text-gray-400">Joined in August 2014</div>
              </div>
          </div>
          <br/>
          <hr/>
          <br/>
          <div class="flex items-center space-x-10">
          <img className="w-10 h-10 rounded-full" src={ProfilePicture} alt={"Carlie Anglemire"}/>
              <div class="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
              </div>
          </div>

          <div class="flex items-center space-x-10">
          <img className="w-10 h-10 rounded-full" src={ProfilePicture} alt={"Carlie Anglemire"}/>
              <div class="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
              </div>
          </div>
        </div>
    </div>
  </div>
  );
}

export default App;
