let previousSelectedTab = 1;

const HOME = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
suscipit labore omnis deserunt officiis sequi iure veniam quod rerum
in accusantium recusandae accusamus officia voluptate vel explicabo,
ab laborum eaque, sapiente vitae dolor aspernatur! Incidunt repellat
autem sapiente modi laboriosam. Atque, ea porro? Lorem ipsum dolor sit
amet consectetur adipisicing elit. Nihil rem corporis esse saepe,
doloribus consequatur doloremque adipisci iste magni! Unde officia
quae animi harum eveniet fuga atque mollitia, perspiciatis repellendus
nisi veritatis sapiente voluptatum laborum deserunt commodi
perferendis ex aliquam. Molestiae, quas iure.`;

const ABOUT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit quos reiciendis dolorem iusto dicta velit cupiditate consequuntur cumque error. Similique incidunt ipsam dolorem illo repudiandae ducimus nisi iure accusamus praesentium? Dignissimos quam fugiat voluptatem beatae ab. Atque, voluptates ducimus? Maxime non alias suscipit quia omnis autem vel voluptatem aspernatur sequi veniam at consequuntur exercitationem quo ex, officia obcaecati explicabo facere? Provident architecto cum, similique nisi esse laboriosam?`;

const CONTACT = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores enim provident, iusto facilis nemo facere? Eveniet veniam iusto impedit alias, tenetur id debitis similique, saepe quod unde nesciunt error reiciendis veritatis aperiam laudantium, vero in dolore expedita iure vel nostrum ducimus? Esse eum fugiat non eligendi voluptatum facilis doloremque deleniti assumenda ipsum sed labore minima rem, nesciunt sint odit, ut hic inventore tenetur amet est, ipsam perspiciatis.`;

const BLOG = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem cumque laboriosam dolorum repudiandae officiis nostrum eligendi iste, illum, placeat mollitia aperiam porro, deleniti similique vero fugiat adipisci nihil modi sunt facere animi velit debitis. Aliquid, fugit eius. Vel, sint. Optio recusandae officia tempore inventore voluptas? Est quod harum dignissimos hic fugit et autem cumque expedita ab, deserunt repudiandae libero, dolore voluptate illum velit, minus recusandae laborum voluptates sed!`;

const handleFunctionality1 = () => {
  const tabSelected = document.querySelector("#tab1");
  document.getElementById(`tab${previousSelectedTab}`).style.borderBottom =
    "none";
  previousSelectedTab = 1;
  tabSelected.style.borderBottom = "2px solid rebeccapurple";
  document.querySelector("#innerHTML").innerHTML = HOME;
};

const handleFunctionality2 = () => {
  const tabSelected = document.querySelector("#tab2");
  document.getElementById(`tab${previousSelectedTab}`).style.borderBottom =
    "none";
  previousSelectedTab = 2;
  tabSelected.style.borderBottom = "2px solid rebeccapurple";
  document.querySelector("#innerHTML").innerHTML = ABOUT;
};

const handleFunctionality3 = () => {
  const tabSelected = document.querySelector("#tab3");
  document.getElementById(`tab${previousSelectedTab}`).style.borderBottom =
    "none";
  previousSelectedTab = 3;
  tabSelected.style.borderBottom = "2px solid rebeccapurple";
  document.querySelector("#innerHTML").innerHTML = CONTACT;
};

const handleFunctionality4 = () => {
  const tabSelected = document.querySelector("#tab4");
  document.getElementById(`tab${previousSelectedTab}`).style.borderBottom =
    "none";
  previousSelectedTab = 4;
  tabSelected.style.borderBottom = "2px solid rebeccapurple";
  document.querySelector("#innerHTML").innerHTML = BLOG;
};
