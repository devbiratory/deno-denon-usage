import { Response, send } from "https://deno.land/x/oak/mod.ts";
export const allUsers = async ({ response }: { response: Response }) => {
  // get sales data from the environment
  // that was saved on start up  
  const salesData = Deno.env.get("SALESDATA"); 
  console.log(salesData) // use the data as needed!

  response.status = 200;
  response.body = {
    success: true,
    data: [
      { id: 1, name: "Goku" },
      { id: 2, name: "Vegeta" },
    ]
  };
};
   
export const activeStatus = async ({ response }: { response: Response }) => {
  response.status = 200;
  response.body = {
    active: true
  };
};

export const goHome = async (context: any)=>{
  await send(context, '', {
    root: `${Deno.cwd()}/public`,
    index: "home.html",
  });
}
