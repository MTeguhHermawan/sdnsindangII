const pengumuman = [
  {
    judul: "Isra Miraj 1447 H",
    tanggal: "28 Januari 2026",
    isi: "Kegiatan peringatan Isra Miraj 1447 H, di kampus SDN Sindang II."
  },
  {
    judul: "Sosialisasi TKA",
    tanggal: "27 Januari 2026",
    isi: "Rapat bersama orang tua / wali asuh membahas informasi dan teknis mengenai TKA (Tes Kemampuan Akademik) Pukul 09.00 WIB bertempat di ruang kelas 2."
  },
   {
    judul: "Lini Masa Pelaksanaan TKA SD/MI/SDLB/Paket A/sederajat",
    tanggal: "19 Januari - 24 Mei 2026",
    isi: "Pendaftaran 19 Januari - 28 Febuari, Simulasi 2 - 8 Maret, Gladi Bersih 9 - 17 Maret, Pelaksanaan Utama 20 - 30 April, Pelaksanaan Susulan 11 - 17 Mei, Pengolahan Hasil 18 - 23 Mei, Pengumuman Hasil 24 Mei."
  }
];

const container = document.getElementById("pengumuman-list");

pengumuman.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${item.judul}</h3>
    <div class="date">${item.tanggal}</div>
    <p>${item.isi}</p>
  `;
  container.appendChild(div);
});
