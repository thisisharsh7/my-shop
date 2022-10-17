import React from 'react';
import Announcement from './Annoucement';
import Tri1 from '../Images/Tri1.png';
import Tri2 from '../Images/Tri2.png';

export default function Why(){
    return(
        <section>
            <div>
                <h1>Why Myshop</h1>
                <p>Use Us Twice Your'll Use Us For Life</p>
            </div>
            <div>
            <Announcement firstLayer = {Tri1} secondLayer = {Tri2} headText = "Lanch your store" paraText = "MyShop helps you launch your online store in less than 30 seconds."/>
            <Announcement firstLayer = {Tri1} secondLayer = {Tri2} headText = "Close to the metal" paraText = "We handle everything from managing orders, products, marketing and inventory."/>
            <Announcement firstLayer = {Tri1} secondLayer = {Tri2} headText = "Perfect Balance" paraText = "Enjoy the benifits of both online and offline shopping right from one app."/>
            </div>
        </section>
    )
}