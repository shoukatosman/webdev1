import './App.css';

function App (){
  return (
    <div>
      <h1 className="text-green-500 text-center text-5xl my-10">Ready to stat the project</h1>
     


      {/*==========modal=============*/}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Open Modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
);
}

export default App;
