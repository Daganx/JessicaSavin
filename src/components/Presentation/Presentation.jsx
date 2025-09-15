import presentation from "../../assets/images/presentation/presentation.jpg";

import "./presentation.css";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation-text">
        <h2>Présentation</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nostrum consequatur inventore natus possimus. Officiis, itaque ea?
          Magnam unde expedita accusantium ratione necessitatibus soluta in
          sapiente eum, numquam, eligendi quibusdam. Qui atque quia fugiat omnis
          in, quod amet nihil? Quaerat corrupti id nam in nulla dolorem fugiat
          voluptatum accusamus ducimus rerum, autem incidunt magni quas, nemo
          eaque. Unde, repellendus dolores? Labore, repudiandae libero? Nihil
          ipsa culpa excepturi pariatur vero ipsum! Sunt similique vitae, atque
          soluta beatae voluptates amet. Praesentium voluptates aliquam nesciunt
          qui dignissimos obcaecati eum vitae, corporis autem dicta. Ut nostrum,
          excepturi ullam sequi veritatis expedita vel nemo nesciunt. Nobis
          expedita ex aperiam sequi totam eaque, maiores harum quos id laborum
          officiis animi ut, vitae fugiat ea consequuntur libero. Magnam,
          deserunt? Consequatur veritatis quidem possimus est quas beatae,
          dolores ab quos. Consequuntur modi ea ipsa? Cupiditate.
        </h3>
      </div>
      <div className="presentation-img">
        <img src={presentation} alt="Image de présentation Jessica Savin" />
      </div>
    </section>
  );
}
