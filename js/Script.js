document.addEventListener('DOMContentLoaded', () => {
    console.log('script geladen');

    const btn = document.getElementById('start-btn');
    const kalenderBtn = document.getElementById('kalender-btn');
    const vorigekalenderBtn = document.getElementById('Vorigekalender-btn');
    const terugblikBtn = document.getElementById('Terugblik-btn');
    const volleybalBtn = document.getElementById('Volleybal-btn');
    const bestuurBtn = document.getElementById('Bestuur-btn');
    const wegbeschrijvingBtn = document.getElementById('Wegbeschrijving-btn');
    const fotoalbumBtn = document.getElementById('Fotoalbum-btn');
    const linksBtn = document.getElementById('Links-btn');
    const privacyBtn = document.getElementById('Privacy-btn');
    const vellekenBtn = document.getElementById('Velleken-btn');

    const main = document.querySelector('main.content');

    if (!main) {
        console.error('Main element niet gevonden');
        return;
    }

    // Definieer inhoud als template strings
    const startpaginaInhoud = `
    <div class="neutral-section">
        <h2>Welkom op de website van</h2>
        <h3>Raak Gijzegem-Hofstade</h3>
        <hr />
        <p class="last-update">Laatste aanpassing: 24/05/2025 (uitnodiging op stap in Brussel, barbecue en fietszoektocht)</p>
        <section class="events">
            <h4>Onze eerstvolgende activiteiten</h4>
            <ul>
                <li>
                    <strong>Zo 25/05</strong>
                    <a class="event-link" href="https://raak.gijhof.be/pdf/praatcafe_04-05_2025.pdf" target="_blank" rel="noopener noreferrer">Praatcaf&eacute;</a>
                </li>
                <li>
                    <strong>Za 31/05</strong>
                    <a class="event-link" href="https://raak.gijhof.be/pdf/buitenspeelnamiddag_2025.pdf" target="_blank" rel="noopener noreferrer">Buitenspeelnamiddag (bumperball en cornhole)</a>
                </li>
                <li>
                    <strong>Za 21/06</strong>
                    <a class="event-link" href="https://raak.gijhof.be/pdf/op_stap_in_brussel_2025.pdf" target="_blank" rel="noopener noreferrer">Op stap in Brussel</a> &nbsp; inschrijven bij Guido
                </li>
                <li>
                    <strong>Za 28/06</strong>
                    <a class="event-link" href="https://raak.gijhof.be/pdf/bbq_2025%20.pdf" target="_blank" rel="noopener noreferrer">Barbecue</a>
                    &nbsp; inschrijven via
                    <a href="https://forms.gle/yuhaDJqidjkRRamh9" target="_blank" rel="noopener noreferrer">Google Formulier</a>
                </li>
                <li>
                    <strong>01/07 - 01/10</strong>
                    <a class="event-link" href="https://raak.gijhof.be/pdf/fietszoektocht_2025.pdf" target="_blank" rel="noopener noreferrer">Fietszoektocht</a>
                </li>
            </ul>
        </section>
        <p class="uitpas-note">
            Houders van een UiTPAS met kansentarief hebben voordeel bij Raak Gijzegem-Hofstade.
        </p>
    </div>
`;


    const kalenderInhoud = `
<div class="kalender-section">
  <h2 class="kalender-titel">Raak jaarprogramma 2025</h2>
  <hr>

  <table class="kalender-tabel" cellpadding="0" cellspacing="0" width="534">
    <colgroup>
      <col>
      <col width="399">
    </colgroup>
    <tbody>
      <tr><th colspan="2">januari</th></tr>
      <tr><td>1&ndash;5 januari</td><td><a href="https://raak.gijhof.be/pdf/griezeltocht_2024.pdf">Winterse griezeltocht</a></td></tr>
      <tr><td>12 januari</td><td><a href="https://raak.gijhof.be/pdf/nieuwjaarsreceptie_2025.pdf">Nieuwjaarsreceptie</a></td></tr>
      <tr><td>16&ndash;21 januari</td><td><a href="https://raak.gijhof.be/pdf/shortski_2025.pdf">Shortski in Zillertal (Oostenrijk)</a></td></tr>
      <tr><td>24 januari</td><td><a href="https://raak.gijhof.be/pdf/belotten_2025.pdf">Belotting</a></td></tr>

      <tr><th colspan="2">februari</th></tr>
      <tr><td>5 februari</td><td><a href="https://raak.gijhof.be/pdf/bedrijsbezoek_ilva_2025.pdf">Bedrijfsbezoek ILVA</a></td></tr>
      <tr><td>9 februari</td><td><a href="https://raak.gijhof.be/pdf/raak_praatcaf%C3%A9_2025.pdf">Raak praatcaf&eacute;</a></td></tr>
      <tr><td>22 februari</td><td><a href="https://raak.gijhof.be/pdf/comedy_2025.pdf">Comedyavond</a></td></tr>
      <tr><td>28 februari</td><td><a href="https://raak.gijhof.be/pdf/belotten_2025.pdf">Belotting</a></td></tr>

      <tr><th colspan="2">maart</th></tr>
      <tr><td>15 maart</td><td><a href="https://raak.gijhof.be/pdf/blokjesfestival_en_ciao_italia_pizzafestival_2025.pdf">Blokjes- en Ciao Italia pizzafestival</a></td></tr>
      <tr><td>16 maart</td><td><a href="https://raak.gijhof.be/pdf/raak_praatcaf%C3%A9_2025.pdf">Raak praatcaf&eacute;</a></td></tr>
      <tr><td>21 maart</td><td><a href="https://raak.gijhof.be/pdf/belotten_2025.pdf">Belotting</a></td></tr>
      <tr><td>29 maart</td><td><a href="https://raak.gijhof.be/pdf/kaas-bier-en_wijnavond_2025.pdf">Kaas-, bier- en wijnavond</a></td></tr>

      <tr><th colspan="2">april</th></tr>
      <tr><td>13 april</td><td><a href="https://raak.gijhof.be/pdf/dauwtrip_2025.pdf">Dauwtrip</a></td></tr>
      <tr><td>21 april</td><td><a href="https://raak.gijhof.be/pdf/paaszoektocht_2025.pdf">Paaszoektocht</a></td></tr>
      <tr><td>27 april</td><td><a href="https://raak.gijhof.be/pdf/praatcafe_04-05_2025.pdf">Praatcaf&eacute;</a></td></tr>

      <tr><th colspan="2">mei</th></tr>
      <tr><td>25 mei</td><td><a href="https://raak.gijhof.be/pdf/praatcafe_04-05_2025.pdf">Praatcaf&eacute;</a></td></tr>
      <tr><td>31 mei</td><td><a href="https://raak.gijhof.be/pdf/buitenspeelnamiddag_2025.pdf">Buitenspeelnamiddag (bumperball en cornhole)</a></td></tr>

      <tr><th colspan="2">juni</th></tr>
      <tr><td>21 juni</td><td><a href="https://raak.gijhof.be/pdf/op_stap_in_brussel_2025.pdf">Op stap in Brussel</a></td></tr>
      <tr><td>28 juni</td><td><a href="https://raak.gijhof.be/pdf/bbq_2025%20.pdf">Barbecue</a></td></tr>

      <tr><th colspan="2">juli</th></tr>
      <tr><td>juli &ndash; september</td><td><a href="https://raak.gijhof.be/pdf/fietszoektocht_2025.pdf">Fietszoektocht</a> - Antwoorden - Winnaars</td></tr>

      <tr><th colspan="2">augustus</th></tr>
      <tr><td>10 augustus</td><td>Jaak Vereecken Classic</td></tr>

      <tr><th colspan="2">september</th></tr>
      <tr><td>14 september</td><td>Motordag - GPX bestand - Kaartje</td></tr>
      <tr><td>27&ndash;28 september</td><td>Levensloop</td></tr>

      <tr><th colspan="2">oktober</th></tr>
      <tr><td>17 oktober</td><td><a href="https://raak.gijhof.be/pdf/belotten_2025.pdf">Belotting</a></td></tr>
      <tr><td>25 oktober</td><td>Dartstornooi</td></tr>
      <tr><td>26 oktober</td><td>Herfstwandeling</td></tr>

      <tr><th colspan="2">november</th></tr>
      <tr><td>9 november</td><td>Sint-Maartenfeest</td></tr>
      <tr><td>15 november</td><td>Belgische avond</td></tr>
      <tr><td>21 november</td><td>Belotting</td></tr>
      <tr><td>29 november</td><td>Gezinsquiz - Uitslag - Winnaars</td></tr>

      <tr><th colspan="2">december</th></tr>
      <tr><td>12 december</td><td><a href="https://raak.gijhof.be/pdf/belotten_2025.pdf">Belotting</a></td></tr>
      <tr><td>20 dec &ndash; 4 jan</td><td><a href="https://raak.gijhof.be/pdf/griezeltocht_2024.pdf">Griezeltocht</a></td></tr>
      <tr><td>28 december</td><td>Griezeltocht + animatie</td></tr>
    </tbody>
  </table>

  <p class="kalender-info">
  * adres Dekkersweg 4 te Gijzegem<br>
  Volleybal iedere dinsdag van 20u tot 22u in de sporthal van het Sint-Vincentiusinstituut te Gijzegem.<br>
  Competitievolleybal KWB-competitie regio Denderland: om de 2 weken speelt onze competitieploeg thuis vanaf 10u zondagvoormiddag.<br>
  Meer info op <a href="http://volley.vandemeerssche.com/">http://volley.vandemeerssche.com</a><br><br>
</p>
</div>
`;



    const vorigekalenderInhoud = `
<div class="kalender-section">
  <h2 class="kalender-titel">Raak jaarprogramma 2024</h2>
  <hr>

  <table class="kalender-tabel" cellpadding="0" cellspacing="0" width="534">
    <colgroup>
      <col>
      <col width="399">
    </colgroup>
    <tbody>
      <tr><th colspan="2">januari</th></tr>
      <tr><td>1-7 januari</td><td><a href="https://raak.gijhof.be/pdf/griezeltocht_2023.pdf">Winterse griezeltocht</a></td></tr>
      <tr><td>13 januari</td><td><a href="https://raak.gijhof.be/pdf/nieuwjaarsreceptie_2024.pdf">Nieuwjaarsreceptie</a></td></tr>
      <tr><td>26 januari</td><td><a href="https://raak.gijhof.be/pdf/belotten_2024.pdf">Belotting</a></td></tr>
      <tr><td>30 jan - 4 feb</td><td><a href="https://raak.gijhof.be/pdf/shortski_2024.pdf">Shortski in Zillertal (Oostenrijk)</a></td></tr>

      <tr><th colspan="2">februari</th></tr>
      <tr><td>2 februari</td><td><a href="https://raak.gijhof.be/pdf/initiatie_canasta_en_belotten_2024.pdf">Initiatie canasta en belotten</a></td></tr>
      <tr><td>24 februari</td><td><a href="https://raak.gijhof.be/pdf/comedy_2024.pdf">Comedy avond met o.a. Raf Coppens</a></td></tr>

      <tr><th colspan="2">maart</th></tr>
      <tr><td>1 maart</td><td><a href="https://raak.gijhof.be/pdf/belotten_2024.pdf">Belotting</a></td></tr>
      <tr><td>9 maart</td><td><a href="https://raak.gijhof.be/pdf/blokjesfestival_en_ciao_italia_pizza_2024.pdf">Blokjes- en Ciao Italia pizzafestival</a></td></tr>
      <tr><td>17 maart</td><td><a href="https://raak.gijhof.be/pdf/koffie_barista_2024.pdf">Koffie Barista</a></td></tr>
      <tr><td>22 maart</td><td><a href="https://raak.gijhof.be/pdf/bedrijfsbezoek_brouwerij_dilewyns_2024.pdf">Bedrijfsbezoek brouwerij Dilewyns</a></td></tr>
      <tr><td>29 maart</td><td><a href="https://raak.gijhof.be/pdf/belotten_2024.pdf">Belotting</a></td></tr>

      <tr><th colspan="2">april</th></tr>
      <tr><td>1 april</td><td><a href="https://raak.gijhof.be/pdf/paaszoektocht_2024.pdf">Paaszoektocht</a></td></tr>
      <tr><td>7 april</td><td><a href="https://raak.gijhof.be/pdf/dauwtrip_2024.pdf">Dauwtrip</a></td></tr>
      <tr><td>21 april</td><td><a href="https://raak.gijhof.be/pdf/stadswandeling_dendermonde_2024.pdf">Stadswandeling Dendermonde</a></td></tr>

      <tr><th colspan="2">mei</th></tr>
      <tr><td>18 mei</td><td><a href="https://raak.gijhof.be/pdf/lightning_strikes_2024.pdf">Lightning strikes (lasershooten)</a></td></tr>

      <tr><th colspan="2">juni</th></tr>
      <tr><td>2 juni</td><td><a href="https://raak.gijhof.be/pdf/daguitstap_planckendael_2024.pdf">Daguitstap Planckendael</a></td></tr>
      <tr><td>8-9 juni</td><td><a href="https://raak.gijhof.be/pdf/eetfestijn_juni_2024.pdf">Verkiezings-eetfestijn</a></td></tr>
      <tr><td>15 juni</td><td><a href="https://raak.gijhof.be/pdf/petanque_2024.pdf">Petanque</a></td></tr>
      <tr><td>30 juni</td><td><a href="https://raak.gijhof.be/pdf/garageverkoop_2024.pdf">Garageverkoop in Gijzegem</a></td></tr>

      <tr><th colspan="2">juli</th></tr>
      <tr><td>juli - oktober</td><td>
        <a href="https://raak.gijhof.be/pdf/fietszoektocht_2024.pdf">Fietszoektocht</a> -
        <a href="https://raak.gijhof.be/pdf/antwoorden_fietszoektocht_2024.pdf">Antwoorden</a> -
        <a href="https://raak.gijhof.be/pdf/winnaars_fietszoektocht_2024.pdf">Winnaars</a>
      </td></tr>

      <tr><th colspan="2">augustus</th></tr>
      <tr><td>4 augustus</td><td><a href="https://raak.gijhof.be/pdf/jvc_2024.pdf">Jaak Vereecken Classic</a></td></tr>

      <tr><th colspan="2">september</th></tr>
      <tr><td>8 of 9 september</td><td>
        <a href="https://raak.gijhof.be/pdf/motordag_2024.pdf">Motordag</a> -
        <a href="https://raak.gijhof.be/pdf/motordag_teaser_2024.pdf">Teaser</a> -
        <a href="https://raak.gijhof.be/images/raak_motordag_2024-0904_ILi_220_km.gpx">GPX bestand</a> -
        <a href="https://raak.gijhof.be/images/raak_motordag_2024_220_km.jpg">Kaartje</a>
      </td></tr>
      <tr><td>28-29 september</td><td><a href="https://raak.gijhof.be/pdf/levensloop_2024.pdf">Levensloop</a></td></tr>

      <tr><th colspan="2">oktober</th></tr>
      <tr><td>4-6 oktober</td><td><a href="https://raak.gijhof.be/pdf/weekendreis_2024.pdf">Weekendreis Normandi&euml; (Frankrijk)</a></td></tr>
      <tr><td>12-13 oktober</td><td><a href="https://raak.gijhof.be/pdf/eetfestijn_oktober_2024.pdf">Verkiezings-eetfestijn</a></td></tr>
      <tr><td>18 oktober</td><td><a href="https://raak.gijhof.be/pdf/belotten_najaar_2024.pdf">Belotting</a></td></tr>
      <tr><td>25 oktober</td><td><a href="https://raak.gijhof.be/pdf/dartstornooi_2024.pdf">Dartstornooi</a></td></tr>
      <tr><td>27 oktober</td><td><a href="https://raak.gijhof.be/pdf/herfstwandeling_2024.pdf">Herfstwandeling</a></td></tr>

      <tr><th colspan="2">november</th></tr>
      <tr><td>3 november</td><td><a href="https://raak.gijhof.be/pdf/sint_2024.pdf">Sint-Maartenfeest</a></td></tr>
      <tr><td>15 november</td><td><a href="https://raak.gijhof.be/pdf/belotten_najaar_2024.pdf">Belotting</a></td></tr>
      <tr><td>24 november</td><td><a href="https://raak.gijhof.be/pdf/raak_praatcaf&eacute;_20241124.pdf">Raak praatcaf&eacute;</a></td></tr>
      <tr><td>30 november</td><td>
        <a href="https://raak.gijhof.be/pdf/gezinsquiz_2024.pdf">Gezinsquiz</a> - Uitslag - Winnaars
      </td></tr>

      <tr><th colspan="2">december</th></tr>
      <tr><td>6 december</td><td><a href="https://raak.gijhof.be/pdf/caf&eacute;_mang&eacute;_2024.pdf">Caf&eacute; Mang&eacute;</a></td></tr>
      <tr><td>13 december</td><td><a href="https://raak.gijhof.be/pdf/belotten_najaar_2024.pdf">Belotting</a></td></tr>
      <tr><td>21 dec - 5 jan</td><td><a href="https://raak.gijhof.be/pdf/griezeltocht_2024.pdf">Griezeltocht</a></td></tr>
      <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
    </tbody>
  </table>

  <p class="kalender-info">
    * Adres: Dekkersweg 4, Gijzegem<br>
    Volleybal iedere dinsdag van 20u &ndash; 22u in de sporthal van het Sint-Vincentiusinstituut te Gijzegem.<br>
    Competitievolleybal KWB-competitie regio Denderland: om de 2 weken speelt onze competitieploeg thuis vanaf 10u zondagvoormiddag.<br>
    Meer info op <a href="http://volley.vandemeerssche.com/">http://volley.vandemeerssche.com</a>
  </p>
</div>
`;

    const terugblikInhoud = `
<p class="terugblik-titel">Terugblik</p>
<p class="terugblik-jaar">2017-2022</p>

<div class="terugblik-tekst">
  <div class="terugblik-regel">
    <span class="datum">Za 29/10/2022</span><a href="http://kwb.gijhof.be/archief/2022/uitslag_quiz_2022.pdf">21e gezinsquiz</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 03/06/2020</span><a href="http://kwb.gijhof.be/archief/2020/uitslag_belotting_20200306.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 24/01/2020</span><a href="http://kwb.gijhof.be/archief/2020/uitslag_belotting_20200124.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 20/12/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_belotting_20191220.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Za 30/11/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_quiz_2019.pdf">20e Gezinsquiz</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 22/11/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_belotting_20191122.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 18/10/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_belotting_20191018.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 22/02/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_belotting_20190222.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 25/01/2019</span><a href="http://kwb.gijhof.be/archief/2019/uitslag_belotting_20190125.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 21/12/2018</span><a href="http://kwb.gijhof.be/archief/2018-2019/uitslag_belotting_20181221.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 30/11/2018</span><a href="http://kwb.gijhof.be/archief/2018-2019/uitslag_belotting_20181130.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Za 24/11/2018</span><a href="http://kwb.gijhof.be/archief/2018-2019/uitslag_quiz_2018.pdf">19e Gezinsquiz</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 19/10/2018</span><a href="http://kwb.gijhof.be/archief/2018-2019/uitslag_belotting_20181019.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Za 10/02/2018</span><a href="http://kwb.gijhof.be/archief/2017-2018/uitslag_bowling_2018.pdf">Bowling</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 22/12/2017</span><a href="http://kwb.gijhof.be/archief/2017-2018/belotting_20171222.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Za 25/11/2017</span><a href="http://kwb.gijhof.be/archief/2017-2018/uitslag_quiz_2017.pdf">18e Gezinsquiz</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 24/11/2017</span><a href="http://kwb.gijhof.be/archief/2017-2018/belotting_20171124.pdf">Belotting</a>
  </div>
  <div class="terugblik-regel">
    <span class="datum">Vr 27/10/2017</span><a href="http://kwb.gijhof.be/archief/2017-2018/belotting_20171027.pdf">Belotting</a>
  </div>
</div>
`;

    const volleybalInhoud = `
  <p class="recreatief-volleybal-jaar">Recreatief volleybal</p>
<hr>

<div class="volleybal-tekst">
  <p>Volleybal opnieuw iedere dinsdagavond in de sporthal van het SVI te Gijzegem van 20 u tot 22 u.</p>

  <p>Er werd een spiksplinternieuwe vloer aangelegd in de sporthal en daarom:</p>
  <p><strong>GEEN BUITENSCHOEISEL OP DE NIEUWE VLOER! ENKEL SPORTSCHOENEN DIE BINNEN WORDEN AANGETROKKEN.</strong></p>

  <p>Even ter herinnering: Sinds enkele jaren is de ingang van de sporthal ook via de ondergrondse parking in de Gravin Robianostraat. Ticketje nemen en bijhouden in de auto of met de fiets (moet niet betaald worden). Bij het verlaten van de parking ticket gewoon scannen en bareel gaat open.</p>

  <p>Competitievolleybal KWB-competitie regio Denderland: om de 2 weken speelt onze competitieploeg thuis vanaf 10u zondagvoormiddag.</p>

  <p>De deelnemende ploegen, de uitslagen en de rangschikking vind je op <a href="http://volley.vandemeerssche.com/" target="_blank" rel="noopener noreferrer">http://volley.vandemeerssche.com</a></p>
</div>

<h3 class="recreatief-volleybal-jaar">Kalender 2022<br>2e semester</h3>
<p class="volleybal-sub">KWB-Falos Volleybalcompetitie Regio Denderland 2022&ndash;2023</p>
  <table class="volleybal-kalender">
    <thead>
      <tr>
        <th>#</th>
        <th>Dag</th>
        <th>Datum</th>
        <th>Uur</th>
        <th>Thuisploeg</th>
        <th>Bezoekers</th>
      </tr>
    </thead>
    <tbody>
  <tr><td>1</td><td class="dag">ZON</td><td>9/10/2022</td><td>10u00</td><td>Hekelgem</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>2</td><td class="dag">ZON</td><td>16/10/2022</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Essene</td></tr>
  <tr><td>3</td><td class="dag">ZON</td><td>23/10/2022</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Wambeek</td></tr>
  <tr><td>4</td><td class="dag">ZON</td><td>13/11/2022</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Atom</td></tr>
  <tr><td>5</td><td class="dag">ZON</td><td>20/11/2022</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Sint-Martinus</td></tr>
  <tr><td>6</td><td class="dag woe">WOE</td><td>23/11/2022</td><td class="uur-special">20u00</td><td>Wambeek</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>7</td><td class="dag">ZON</td><td>15/01/2023</td><td>10u00</td><td>Essene</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>8</td><td class="dag">ZON</td><td>22/01/2023</td><td>10u00</td><td>Sint-Martinus</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>9</td><td class="dag">ZON</td><td>29/01/2023</td><td>10u00</td><td>Atom</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>10</td><td class="dag">ZON</td><td>5/02/2023</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Hekelgem</td></tr>
  <tr><td>11</td><td class="dag">ZON</td><td>12/02/2023</td><td>10u00</td><td>Herzele</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>12</td><td class="dag">ZON</td><td>5/03/2023</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Affligem</td></tr>
  <tr><td>13</td><td class="dag">ZON</td><td>12/03/2023</td><td>10u00</td><td>Affligem</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>14</td><td class="dag">ZON</td><td>19/03/2023</td><td>10u00</td><td>Strijtem</td><td class="gijzegem">Gijzegem</td></tr>
  <tr><td>15</td><td class="dag">ZON</td><td>23/04/2023</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Strijtem</td></tr>
  <tr><td>16</td><td class="dag">ZON</td><td>7/05/2023</td><td>10u00</td><td class="gijzegem">Gijzegem</td><td>Herzele</td></tr>
</tbody>
  </table>
`;


    const bestuurBtnInhoud = `
<div class="bestuur-container">
  <div class="contact-header">
    <p class="contact-intro">
      Wens je met Raak <span class="plaatsnaam">Gijzegem-Hofstade</span> in contact te treden 
      (vragen, opmerkingen, suggesties...), neem contact op met onze voorzitter, 
      Guido Bruyland, of stuur een mail naar:
      <a href="mailto:info@raakgijzegem.be" class="email-link">
        info@raakgijzegem.be
      </a>
    </p>
  </div>

  <div class="bestuursfoto-wrapper">
    <img src="Images/bestuur_2017.jpg" alt="Bestuur KWB Gijzegem-Hofstade" class="bestuursfoto">
  </div>

  <div class="bestuursintro">
    <p>Spreek je graag &eacute;&eacute;n van onze bestuursleden aan? Maak je keuze:</p>
  </div>

  <div class="bestuursgrid">
    <div class="bestuurslid-card">
      <div class="functie-header">
        <h3>Voorzitter</h3>
      </div>
      <div class="contact-details">
        <p><strong>Bruyland Guido</strong></p>
        <p>Kuipersstraat 52</p>
        <p>9308 Hofstade</p>
        <p>Tel: 0494/03.86.67</p>
      </div>
    </div>

    <div class="bestuurslid-card">
      <div class="functie-header">
        <h3>Secretaris</h3>
      </div>
      <div class="contact-details">
        <p><strong>Hautekeete Dirk</strong></p>
        <p>De Schrijverstraat 12</p>
        <p>9300 Aalst</p>
        <p>Tel: 0474/84.73.45</p>
      </div>
    </div>

    <div class="bestuurslid-card">
      <div class="functie-header">
        <h3>Penningmeester</h3>
      </div>
      <div class="contact-details">
        <p><strong>De Decker Dirk</strong></p>
        <p>Kruisstraat 35a</p>
        <p>9308 Gijzegem</p>
        <p>Tel: 053/77.91.83</p>
      </div>
    </div>

    <div class="bestuurslid-card">
      <div class="functie-header">
        <h3>Volleybalverantwoordelijk</h3>
      </div>
      <div class="contact-details">
        <p><strong>Heirweg Cedric</strong></p>
        <p><strong>Mannaert Kelly</strong></p>
        <p><strong>Van Riet Mark</strong></p>
      </div>
    </div>

    <div class="bestuurslid-card">
      <div class="functie-header">
        <h3>Webmaster</h3>
      </div>
      <div class="contact-details">
        <p><strong>Lievens Ivan</strong></p>
        <p>Kamdriesstraat 7</p>
        <p>9308 Hofstade</p>
        <p>Tel: 053/78.60.60</p>
        <p>GSM: 0473/86.50.63</p>
      </div>
    </div>
  </div>

  <div class="medebestuur-section">
    <h3 class="medebestuur-title">Medebestuursleden</h3>
    <div class="medebestuur-grid">
      <div class="medebestuur-card"><p><strong>Bocchi Jean-Carlo</strong></p><p>Aalstersestraat 86, 9280 Wieze</p><p>Tel: 0499/53.45.55</p></div>
      <div class="medebestuur-card"><p><strong>De Jaeger Ann</strong></p><p>Migrodriesstraat 5, 9200 Schoonaarde</p><p>Tel: 0477/26.11.09</p></div>
      <div class="medebestuur-card"><p><strong>De Kuyper Paul</strong></p><p>Schendelbeekhofstraat 28, 9300 Aalst</p><p>Tel: 0473/53.07.57</p></div>
      <div class="medebestuur-card"><p><strong>De Rycke Wim</strong></p></div>
      <div class="medebestuur-card"><p><strong>De Smedt Hubert</strong></p><p>Drapstraat 38, 9308 Gijzegem</p><p>Tel: 053/70.35.06</p></div>
      <div class="medebestuur-card"><p><strong>De Winne Lieven</strong></p></div>
      <div class="medebestuur-card"><p><strong>Deschrijver Marc</strong></p><p>Kasteelstraat 2, 9308 Hofstade</p><p>Tel: 053/41.49.94</p><p>GSM: 0474/52.04.17</p></div>
      <div class="medebestuur-card"><p><strong>Fransen Marc</strong></p><p>Drapstraat 13, 9308 Gijzegem</p><p>Tel: 053/21.24.54</p><p>GSM: 0498/57.55.82</p></div>
      <div class="medebestuur-card"><p><strong>Heirwegh Ren&eacute;</strong></p><p>Zakstraat 14a, 9308 Hofstade</p><p>GSM: 0475/87.81.99</p></div>
      <div class="medebestuur-card"><p><strong>Jacobs Leo</strong></p><p>Osseweilaan 5, 9308 Gijzegem</p><p>Tel: 053/77.15.40</p></div>
      <div class="medebestuur-card"><p><strong>Janssens David</strong></p></div>
      <div class="medebestuur-card"><p><strong>Nuyts Maureen</strong></p></div>
      <div class="medebestuur-card"><p><strong>Simon Luc</strong></p><p>Popperodedries 4, 9300 Aalst</p><p>GSM: 0475/85.54.65</p></div>
      <div class="medebestuur-card"><p><strong>Van der Cruys An</strong></p></div>
      <div class="medebestuur-card"><p><strong>Van der Speeten Bert</strong></p></div>
      <div class="medebestuur-card"><p><strong>Van Gysegem Isabelle</strong></p><p>Anjersstraat 14, 9308 Hofstade</p><p>GSM: 0473/69.18.62</p></div>
      <div class="medebestuur-card"><p><strong>Van Haudt Benny</strong></p><p>Hendrik Consciensestraat 12, 9308 Hofstade</p><p>GSM: 0478/57.68.41</p></div>
      <div class="medebestuur-card"><p><strong>Van Hauwermeiren Peter</strong></p><p>Milleniumstraat 21, 9280 Lebbeke</p><p>GSM: 0473/87.75.77</p></div>
      <div class="medebestuur-card"><p><strong>Vereecken Emery</strong></p><p>Steenweg naar Oudegem 126, 9308 Hofstade</p><p>Tel: 053/21.63.28</p><p>GSM: 0479/26.65.11</p></div>
    </div>
  </div>
</div>
`;


    //Wegbeschrijving (gebruik van leaflet)
    /* 
        const wegbeschrijvingBtnInhoud = `
    <section class="location-section">
      <p class="section-title"><strong>Kaarten en adresgegevens</strong></p>
      <hr class="section-divider">
    
      <div class="location-block">
        <p><span class="location-label">Ontmoetingscentrum</span><font size="4" class="address-text">
          <span class="location-name">De Looierij</span><br>
          <span class="address-line">Dekkersweg 4</span><br>
          <span class="address-line">9308 Gijzegem</span></font>
        </p>
        <div id="map1" class="map-frame" style="width:425px; height:350px;"></div>
      </div>
    
      <div class="location-block">
        <p class="address-block">
          <span class="location-name">Sporthal Sint-Vincentiusinstituut</span><br>
          <span class="address-line">Kruisstraat</span><br>
          <span class="address-line">9308 Gijzegem</span>
        </p>
        <div id="map2" class="map-frame" style="width:425px; height:350px;"></div>
      </div>
    </section>
    `;
    */

    const wegbeschrijvingBtnInhoud = `
<section class="location-section">
  <p class="section-title"><strong>Kaarten en adresgegevens</strong></p>
  <hr class="section-divider">

  <div class="location-block">
    <p><span class="location-label">Ontmoetingscentrum</span><font size="4" class="address-text">
      <span class="location-name">De Looierij</span><br>
      <span class="address-line">Dekkersweg 4</span><br>
      <span class="address-line">9308 Gijzegem</span></font>
    </p>
    <p>
      <iframe class="map-frame" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        src="http://maps.google.be/maps?f=q&amp;hl=nl&amp;geocode=&amp;q=Dekkersweg,+9308++Aalst&amp;sll=50.98337,4.05093&amp;sspn=0.0067,0.013733&amp;ie=UTF8&amp;ll=50.989395,4.055157&amp;spn=0.0067,0.013733&amp;z=14&amp;iwloc=addr&amp;output=embed&amp;s=AARTsJojuH79qBxrHQV5PaDshgnSUvRwOw"></iframe><br>
      <small><a class="map-link" href="http://maps.google.be/maps?f=q&amp;hl=nl&amp;geocode=&amp;q=Dekkersweg,+9308++Aalst&amp;sll=50.98337,4.05093&amp;sspn=0.0067,0.013733&amp;ie=UTF8&amp;ll=50.989395,4.055157&amp;spn=0.0067,0.013733&amp;z=14&amp;iwloc=addr&amp;source=embed" target="_blank">Grotere kaart weergeven</a></small>
    </p>
  </div>

  <div class="location-block">
    <p class="address-block">
      <span class="location-name">Sporthal Sint-Vincentiusinstituut</span><br>
      <span class="address-line">Kruisstraat</span><br>
      <span class="address-line">9308 Gijzegem</span>
    </p>
    <p>
      <iframe class="map-frame" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        src="http://maps.google.be/maps?f=q&amp;hl=nl&amp;geocode=&amp;q=Kruisstraat+17,+9308++Aalst&amp;sll=50.985694,4.048784&amp;sspn=0.0067,0.013733&amp;ie=UTF8&amp;ll=50.992906,4.050436&amp;spn=0.0067,0.013733&amp;z=14&amp;iwloc=addr&amp;output=embed&amp;s=AARTsJpC_pskGdbGTToGZdLUHlPrVSuicw"></iframe><br>
      <small><a class="map-link" href="http://maps.google.be/maps?f=q&amp;hl=nl&amp;geocode=&amp;q=Kruisstraat+17,+9308++Aalst&amp;sll=50.985694,4.048784&amp;sspn=0.0067,0.013733&amp;ie=UTF8&amp;ll=50.992906,4.050436&amp;spn=0.0067,0.013733&amp;z=14&amp;iwloc=addr&amp;source=embed" target="_blank">Grotere kaart weergeven</a></small>
    </p>
  </div>
</section>
`;

    const fotoalbumBtnInhoud = `
<section class="fotoalbum-section">
  <p class="subtitle">Fotoalbum</p>
  <hr class="section-divider">

  <p class="last-update">Laatste update fotoarchief: 14/01/2024 (nieuwjaarsreceptie)</p>
  <p class="spacer">&nbsp;</p>

  <p class="spacer">&nbsp;</p>

  <p class="photo-archive">
    Bezoek ons fotoarchief op
    <a href="http://www.gijhof.be/kwbfotoalbum/" target="_blank" rel="noopener noreferrer">
      http://www.gijhof.be/kwbfotoalbum/
    </a>
  </p>

  <p class="spacer">&nbsp;</p>

  <p class="extra-photos">
    <a href="https://picasaweb.google.com/116841282816502571449/Kwb_parijs_okt2011" target="_blank" rel="noopener noreferrer">
      Extra foto's weekendreis Parijs
    </a>
  </p>

  <p class="spacer">&nbsp;</p>
  <p class="spacer">&nbsp;</p>
</section>
`;

    const vellekenBtnInhoud = `
<section id="velleken" class="main-content-section">
  <p class="velleken-title">'t Velleken - D&eacute; krant van KWB Gijzegem-Hofstade</p>
  <hr class="velleken-divider">

  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_202001.pdf" target="_blank">'t Velleken januari 2020</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201901.pdf" target="_blank">'t Velleken januari 2019</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201709.pdf" target="_blank">'t Velleken september 2017 - december 2018</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201609.pdf" target="_blank">'t Velleken september 2016</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201509.pdf" target="_blank">'t Velleken september 2015</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201505.pdf" target="_blank">'t Velleken mei 2015</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201503.pdf" target="_blank">'t Velleken maart 2015</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201501.pdf" target="_blank">'t Velleken januari 2015</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201409.pdf" target="_blank">'t Velleken september 2014</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201405.pdf" target="_blank">'t Velleken mei 2014</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201401a.pdf" target="_blank">'t Velleken januari 2014</a></p>
  <p class="velleken-link"><a href="http://kwb.gijhof.be/velleken/velleken_201309.pdf" target="_blank">'t Velleken september 2013</a></p>
</section>
`;

    const linksBtnInhoud = ` <section class="sectie algemene-links">
        <p class="sectie-titel">Hyperlinks naar andere websites</p>
        <hr class="sectie-scheiding" />
        <p class="link-item"><a target="_blank" href="http://www.chiropopov.be/">Chiro Popov Gijzegem</a></p>
        <p class="link-item"><a target="_blank" href="http://www.chiro-hofstade.be/">Chiro Sinte Goedele Hofstade</a></p>
        <p class="link-item"><a target="_blank" href="http://users.telenet.be/davidsfonds_gijzegem/">Davidsfonds Gijzegem</a></p>
        <p class="link-item"><a target="_blank" href="http://www.dfhofstade.be/">Davidsfonds Hofstade</a></p>
        <p class="link-item"><a target="_blank" href="http://www.dekenaataalst.be/">Dekenaat Aalst</a></p>
        <p class="link-item"><a target="_blank" href="http://femma.hofstade.com/">Femma Hofstade</a></p>
        <p class="link-item"><a target="_blank" href="http://www.denderland.be/">Heemkundige kring Denderland (Hofstade - Gijzegem)</a></p>
        <p class="link-item"><a target="_blank" href="http://www.jhjome.be/">Jeugdhuis Jome</a></p>
        <p class="link-item"><a target="_blank" href="http://www.kwbaalst.be/">KWB Aalst Sint-Martinus</a></p>
        <p class="link-item"><a target="_blank" href="http://www.kwb.be/">KWB nationaal</a></p>
        <p class="link-item"><a target="_blank" href="http://www.kwb.be/kwboostvlaanderen">KWB Oost-Vlaanderen</a></p>
        <p class="link-item"><a target="_blank" href="http://www.pchofstade.be/">Parochiaal Centrum Hofstade</a></p>
        <p class="link-item"><a target="_blank" href="http://www.delooierij.be/">Ontmoetingscentrum De Looierij Gijzegem</a></p>
        <p class="link-item"><a target="_blank" href="http://www.vastalseik.be/">Vast als Eik (toneelvereiniging)</a></p>
    </section>
`;



    const privacyBtnInhoud = `
<section class="sectie privacyverklaring">
  <p class="sectie-titel">Privacyverklaring leden</p>
  <hr class="sectie-scheiding" />

  <p class="privacy-header"><strong>Privacyverklaring ledengegevens</strong></p>

  <p class="privacy-text">
    Raak Gijzegem-Hofstade bewaart enkel de gegevens die ze van jou ontvangt bij het afsluiten van je lidmaatschap (naam en adres, geboortedatum, contactgegevens als je deze doorgaf). Deze gegevens worden opgeslagen in de beveiligde database van raak vzw, U. Britsierslaan 5 te 1030 Schaarbeek. De gegevens worden tot maximum 2 jaar na het stoppen van het lidmaatschap bewaard.
  </p>

  <p class="privacy-text">De gegevens worden gebruikt voor:</p>

  <ul class="privacy-lijst">
    <li>De ledenadministratie (gebeurt door raak vzw)</li>
    <li>Het bezorgen van het ledenblad, de uitnodigingen voor de activiteiten, de nieuwsbrief van onze afdeling.</li>
    <li>De raak-ledenverzekering (gebeurt door raak vzw)</li>
  </ul>

  <p class="privacy-text">
  Als je je gegevens wil inkijken of verbeteren, kan dit steeds online via
  <a href="https://korpus.raakvzw.be/" target="_blank" rel="noopener noreferrer">https://korpus.raakvzw.be/</a>
  of via mail (
  <a href="mailto:info@raakgijzegem.be" class="email-link">info@raakgijzegem.be</a>).
  </p>


  <p class="privacy-text">
    Raak Gijzegem-Hofstade verklaart hierbij de Europese Verordening 2016/679 rond de bescherming van persoonsgegevens na te leven.
  </p>
</section>
`;


    // Functie om inhoud te laden (gebruik van leaflet)
    /*
    async function laadInhoud(html) {
        main.innerHTML = html;

        // Functie om een adres te geocoderen
        async function toonKaart(id, adres, popupTekst) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adres)}`);
            const data = await response.json();

            if (data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;

                const map = L.map(id).setView([lat, lon], 15);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
                L.marker([lat, lon]).addTo(map).bindPopup(popupTekst).openPopup();
            } else {
                document.getElementById(id).innerHTML = "<p style='color:red'>Adres niet gevonden.</p>";
            }
        }

        // Kaarten tonen op basis van adres
        if (document.getElementById('map1')) {
            await toonKaart('map1', 'Dekkersweg 4, 9308 Gijzegem, België',
                `<strong>Ontmoetingscentrum De Looierij</strong><br>Dekkersweg 4<br>9308 Gijzegem`);
        }

        if (document.getElementById('map2')) {
            await toonKaart('map2', 'Kruisstraat, 9308 Gijzegem, België',
                `<strong>Sporthal Sint-Vincentiusinstituut</strong><br>Kruisstraat<br>9308 Gijzegem`);
        }
    }
    */

    // Functie om inhoud te laden
    function laadInhoud(html) {
        main.innerHTML = html;
    }

    // Startpagina laden bij het laden van de pagina
    laadInhoud(startpaginaInhoud);

    // Event listeners
    if (btn) {
        btn.addEventListener('click', () => laadInhoud(startpaginaInhoud));
    } else {
        console.error('Start-knop niet gevonden');
    }

    if (kalenderBtn) {
        kalenderBtn.addEventListener('click', () => laadInhoud(kalenderInhoud));
    } else {
        console.error('Kalender-knop niet gevonden');
    }

    if (vorigekalenderBtn) {
        vorigekalenderBtn.addEventListener('click', () => laadInhoud(vorigekalenderInhoud));
    } else {
        console.error('Vorigekalender-knop niet gevonden');
    }

    if (terugblikBtn) {
        terugblikBtn.addEventListener('click', () => laadInhoud(terugblikInhoud));
    } else {
        console.error('Terugblik-knop niet gevonden');
    }

    if (volleybalBtn) {
        volleybalBtn.addEventListener('click', () => laadInhoud(volleybalInhoud));
    } else {
        console.error('Volleybal-knop niet gevonden');
    }

    if (bestuurBtn) {
        bestuurBtn.addEventListener('click', () => laadInhoud(bestuurBtnInhoud));
    } else {
        console.error('Bestuur-knop niet gevonden');
    }

    if (wegbeschrijvingBtn) {
        wegbeschrijvingBtn.addEventListener('click', () => laadInhoud(wegbeschrijvingBtnInhoud));
    } else {
        console.error('Wegbeschrijving-knop niet gevonden');
    }

    if (fotoalbumBtn) {
        fotoalbumBtn.addEventListener('click', () => laadInhoud(fotoalbumBtnInhoud));
    } else {
        console.error('Fotoalbum-knop niet gevonden');
    }

    if (vellekenBtn) {
        vellekenBtn.addEventListener('click', () => laadInhoud(vellekenBtnInhoud));
    } else {
        console.error('\'t Velleken-knop niet gevonden');
    }

    if (linksBtn) {
        linksBtn.addEventListener('click', () => laadInhoud(linksBtnInhoud));
    } else {
        console.error('Links-knop niet gevonden');
    }

    if (privacyBtn) {
        privacyBtn.addEventListener('click', () => laadInhoud(privacyBtnInhoud));
    } else {
        console.error('Privacy-knop niet gevonden');
    }


    document.getElementById('footer-bestuur-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('Bestuur-btn').click();
    });

    document.getElementById('footer-privacy-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('Privacy-btn').click();
    });

});