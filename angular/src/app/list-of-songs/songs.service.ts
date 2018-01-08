import { Injectable } from '@angular/core';
import { ISongs } from './songs'; // Data type.

@Injectable()
export class SongsService {

    getSongs(): ISongs[] {
        return [
            {
                'songId': 1,
                'songName': 'La Fiesta de Pilito',
                'time': '3:55',
                'artist': 'El Gran Combo de Puerto Rico',
                'album': 'Nuestra Música',
                'genre': 'Salsa',
                'starRating': 4.5,
                'imageUrl': 'https://i.scdn.co/image/404f1635238ba205e075539a174482ef432e4269',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 2,
                'songName': 'Olé Maja',
                'time': '4:46',
                'artist': 'Quique Domenech',
                'album': 'Lo Mejor de Quique Domenech',
                'genre': 'Folk',
                'starRating': 4.9,
                'imageUrl': 'https://i.scdn.co/image/3c3fa25c32e690e9f23f53c2d1ccef500398af71',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 3,
                'songName': 'Fuego en el 23',
                'time': '5:55',
                'artist': 'La Sonora Ponceña',
                'album': '¡Fuego en el 23!',
                'genre': 'Salsa',
                'starRating': 4.3,
                'imageUrl': 'https://i.scdn.co/image/bb04ba14771bcb7b9b3b8d9272dbcf3edd451c63',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 4,
                'songName': 'Y no hago más na\'',
                'time': '4:58',
                'artist': 'El Gran Combo de Puerto Rico',
                'album': 'La Universidad de la Salsa',
                'genre': 'Salsa',
                'starRating': 4.8,
                'imageUrl': 'https://i.scdn.co/image/bd133f28a29442e2b420ca2fae2dca49abf24349',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 5,
                'songName': 'Trucutú',
                'time': '5:02',
                'artist': 'Tommy Olivencia',
                'album': 'Planté Bandera',
                'genre': 'Salsa',
                'starRating': 4.7,
                'imageUrl': 'https://i.scdn.co/image/08fc80299210cce3beb3eb62f4ca15c925fcf2a9',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 6,
                'songName': 'Brujería',
                'time': '3:24',
                'artist': 'El Gran Combo de Puerto Rico',
                'album': 'Aqui No Se Sienta Nadie',
                'genre': 'Salsa',
                'starRating': 4.6,
                'imageUrl': 'https://i.scdn.co/image/58433db130f8450f1e5ecd60a2b91aa062ff25bd',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 7,
                'songName': 'Así es mi Tierra',
                'time': '4:23',
                'artist': 'Los Hispanos',
                'album': '15 Éxitos Navideños',
                'genre': 'Folk',
                'starRating': 4.7,
                'imageUrl': 'https://i.scdn.co/image/583eb7f7dacf70ca033f076228fe1021bebeee8a',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 8,
                'songName': 'Valió la pena',
                'time': '4:52',
                'artist': 'Marc Anthony',
                'album': 'Valió la pena',
                'genre': 'Salsa',
                'starRating': 4.4,
                'imageUrl': 'https://i.scdn.co/image/3529b62882eb34f27558d89c3df11c33f22b8a46',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 9,
                'songName': 'Perdóname',
                'time': '7:55',
                'artist': 'Gilberto Santa Rosa',
                'album': 'Punto de Vista',
                'genre': 'Salsa',
                'starRating': 4.8,
                'imageUrl': 'https://i.scdn.co/image/8de15a837f5006df898284000ce8574e2140b65a',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 10,
                'songName': 'Defensa al Jíbaro',
                'time': '3:58',
                'artist': 'Quique Domenech (feat. Tony Croatto)',
                'album': 'Homenaje a Luis Miranda',
                'genre': 'Folk',
                'starRating': 4.8,
                'imageUrl': 'https://i.scdn.co/image/073cd38b6111455ab174ed89a1cb054888607e68',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 11,
                'songName': 'Yambeque',
                'time': '6:22',
                'artist': 'La Sonora Ponceña',
                'album': 'Determination',
                'genre': 'Salsa',
                'starRating': 4.5,
                'imageUrl': 'https://i.scdn.co/image/74756fe2fb2fe68d1e7be3c8096391466b9232f5',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 12,
                'songName': 'Arroz con Habichuela',
                'time': '5:56',
                'artist': 'El Gran Combo de Puerto Rico',
                'album': 'Arroz con Habichuela',
                'genre': 'Salsa',
                'starRating': 4.9,
                'imageUrl': 'https://i.scdn.co/image/05b1f1358521432fcfb0ae7747bc5127c56ed339',
                'songUrl': '',
                'songLyrics': ''
            },
            {
                'songId': 13,
                'songName': 'Aguinaldo Jíbaro',
                'time': '3:45',
                'artist': 'Quique Domenech',
                'album': 'Lo Mejor de Quique Domenech',
                'genre': 'Folk',
                'starRating': 4.7,
                'imageUrl': 'https://i.scdn.co/image/3c3fa25c32e690e9f23f53c2d1ccef500398af71',
                'songUrl': '',
                'songLyrics': ''
            },
        ];
    }
}