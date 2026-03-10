import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>BEM VINDO!</h1>
      
      <div>
        <div 
          onClick={() => navigate('/produtos')}
        >
          <h2 className="text-xl font-bold mt-2">Ver Produtos</h2>
        </div>








        ]


        
      </div>
    </div>
  );
}