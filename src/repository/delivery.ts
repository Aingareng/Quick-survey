import { IQuestion } from "./Model";

export const questions: IQuestion[] = [
  { id: 1, 
    question: 'Seberapa sering Anda berolahraga dalam seminggu?',
    answer: [
      'Setiap hari', 
      '3-4 kali seminggu', 
      '1-2 kali seminggu'
    ]
  },
  { id: 2, 
    question: 'Seberapa sering Anda mengonsumsi makanan cepat saji?',
    answer: [
      'Setiap hari', 
      '1-2 kali seminggu', 
      'Tidak pernah'
    ]
  },
  { id: 3, 
    question: 'Seberapa banyak waktu yang Anda habiskan untuk tidur setiap malam?',
    answer: [
      'Kurang dari 5 jam', 
      '5-7 jam', 
      '7-9 jam'
    ]
  },
  { id: 4, 
    question: 'Apakah Anda rutin melakukan pemeriksaan kesehatan?',
    answer: [
      'Setiap 6 bulan', 
      'Setiap tahun', 
      'Tidak pernah'
    ]
  },
  { id: 5, 
    question: 'Seberapa sering Anda mengonsumsi sayur dan buah setiap hari?',
    answer: [
      'Setiap kali makan', 
      'Setidaknya sekali sehari', 
      'Beberapa kali seminggu'
    ]
  },
  { id: 6, 
    question: 'Apakah Anda merokok?',
    answer: [
      'Ya, setiap hari', 
      'Ya, kadang-kadang', 
      'Tidak, saya tidak pernah merokok'
    ]
  },
  { id: 7, 
    question: 'Seberapa sering Anda mengalami stres?',
    answer: [
      'Setiap hari', 
      'Beberapa kali seminggu', 
      'Beberapa kali sebulan'
    ]
  },
  { id: 8, 
    question: 'Apakah Anda rutin mengonsumsi suplemen atau vitamin?',
    answer: [
      'Setiap hari', 
      'Beberapa kali seminggu', 
      'Tidak pernah'
    ]
  },
  { id: 9, 
    question: 'Seberapa sering Anda mengonsumsi alkohol?',
    answer: [
      'Setiap hari', 
      'Beberapa kali seminggu', 
      'Tidak pernah'
    ]
  },
  { id: 10, 
    question: 'Apakah Anda memiliki riwayat penyakit kronis dalam keluarga Anda?',
    answer: [
      'Ya, beberapa anggota keluarga', 
      'Ya, satu anggota keluarga', 
      'Tidak ada'
    ]
  }
];
