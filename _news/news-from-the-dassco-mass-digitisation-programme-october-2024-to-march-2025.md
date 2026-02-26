---
title: "News from the DaSSCo mass digitisation programme - October 2024 to March 2025"
date: 2025-04-15
layout: article
link: /news-from-the-dassco-mass-digitisation-programme-october-2024-to-march-2025
mainImage: "/assets/images/news/402970236-63415d5d-bc3c-4810-9403-d3c4c1bf92e4-scaled.jpg"
altImageText: 
    da: Kameraopsætning af højkvalitetsbilleder af eksemplarer 
    en: Camera setup of high definition picture taking of specimens
type: News
teaser: "News from the last 6 months at DaSSCo. We reached milestones, updated our Digitisation App and much more. Read more to find out!"
---
## Image: Camera setup of high definition picture taking of specimens

## Team news
We have many team news in this edition of the DaSSCo newsletter. First of all we have two new Digitisers joining DaSSCo.

They started 1/1 2025 at NHMD – one is digitising four days a week – two days with the Entomology Collection and two days at the Herbarium digitising vascular plants. The other is digitising two days a week. Then from 1/3 2025 our Student Assistant Programmer started working again for 15 hours a week and the same for our Communications Consultant.

DaSSCo sadly also had to say goodbye to several people. We had to say goodbye to the DaSSCo Project Leader. She stopped on 31/1 2025 and someone else has taken over the position as Project Leader. Then we also said goodbye – but see you around – to two digitisers who both started work at NHMD instead.

## Digitisation news
In October 2024 DaSSCo digitsers went on a two- day visit to Aarhus, where they had the chance to meet their digitisation colleagues in person and go through the different workflows together, trying to improve issues. They installed a new imaging enclosure at the Aarhus Herbarium (NHMA), which supports larger, better light panels and protects against ambient light. Likewise they made plans for improving the workstation for digitizing pinned insects at NHMA, which will receive a larger table and second monitor to make the workflow easier and more ergonomic.


<p align="center">
  <img src="/assets/images/news/Picture1.jpg" width="300" alt="Many happy people at a long table, cheering">
</p>

## Image: The new, bigger enclosure for herbarium sheet imaging at AAU, before the curtains were added. Two digitisers are preparing the small screen to go inside the enclosure.

A milestone was reached at the Danish Herbarium at NHMD. The digitisation of which is now around ¼ accomplished – over 750 out of 3000 boxes of specimens are now digitised. Likewise in In the NHMD Entomology collection, they digitised around 2.000 specimens of grass-associated Nymphalidae butterflies for a project.

Well done DaSSCo Team!

The last quarter of 2024, the DaSSCo Technical Team’s development duo followed up their visit to the Natural History Museum London in September by concluding testing of equipment and software options for labels-on pinned insect imaging. They presented their results to peers in IT and leadership within DaSSCo and the group agreed upon the way going forward. Then they built a first version of the workstation for labels on mass digitisation of pinned insects. In the first quarter of 2025 this workstation was tested and refined to become ready for daily digitisation.

## Development news
We will start in the IT Department where DaSSco IT Lead (NHMD) and Senior Data Digitiser (NHMD), facilitated the data pipeline to ingest images from Aarhus University. They did this by adjusting the workflow and deployment of AU digitisation software SpeciesOCR and SpeciesWEB to DeiC servers and solved the surrounding issues. They have also been in contact with the original programmer to sort out other existing errors and tailor the ingestion as a separate process. The aim is to modularise the automation, so that issues can be addressed in a more controlled manner without hampering the whole digitisation process.

DaSSCo IT Consultant (NHMD), successfully tested the preproduction environment for the data ingestion to Asset Registry System (ARS) from Natural History Museum Denmark to Aarhus Herbarium. There were problems with the AU Herbarium digitisation workflow. It was not able to ingest the digitised files, which was causing issues. Meanwhile our IT Consultant was helping with metadata updates that were needed to support the Specify integration and other issues. He has been making sure that the test suite is ready to test the new changes that will be made by NorthTech on ARS in the next version. This work will continue in Q2 this year, where it hopefully will be completed.

In other development news, the Transcription Platform has been tested on dung beetles. In Q4 2024 and most of Q1 2025 Assistant Data Coordintator (NHMD), continued the development of version 1 of the DaSSCo Transcription Platform together with an External Consultant. In early March 2025 they moved on to testing the use of version 1 of the platform. As a pilot project, they are transcribing the labels in images of dung beetles captured with the DaSSCo workflow for pinned insects. Our Assistant Data Coordinator is testing the platform herself, but other DaSSCo and NHMD employees have also all been assigned users to the platform. They are helping with the testing and reporting bugs and other issues. Once the platform is ready for production, they will open up for the addition of more users.

In January our Data Coordinator (NHMD), spent some focused time redoing the graphical user interface of the DaSSCo Mass Digitization app. The reason for this was that the original GUI framework we used (PySimpleGUI) started asking for licences for its usage. DaSSCo decided to go for the much more widely used, versatile and usage-friendly pyQt framework for python applications. This change of the application makes the version number to 2.0. The process went relatively smooth, and although the GUI elements have now completely been replaced, some rewiring and subsequent testing is still left to do for the next quarter. You can see more details here:
