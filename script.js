// State Data
const data = {
  orders: [
    {
      id: "ORD-0268",
      customer: "PT Nusantara Jaya",
      origin: "Bitung",
      mode: "Kapal + Truck",
      factory: "PT Sari Mas Permai",
      container: "2 x 20FT",
      status: "Shipping",
    },
    {
      id: "ORD-0267",
      customer: "CV Sumber Makmur",
      origin: "Makassar",
      mode: "Kapal + Truck",
      factory: "PT Agro Prima",
      container: "3 x 20FT",
      status: "Menunggu DO",
    },
    {
      id: "ORD-0266",
      customer: "PT Berkah Industri",
      origin: "Surabaya",
      mode: "Trucking",
      factory: "PT Sari Mas Permai",
      container: "—",
      status: "Berjalan",
    },
    {
      id: "ORD-0265",
      customer: "UD Makmur",
      origin: "Manado",
      mode: "Kapal + Truck",
      factory: "PT Sawit Sejahtera",
      container: "4 x 20FT",
      status: "Selesai",
    },
  ],
  kopra: [
    {
      id: "KOP-091",
      supplier: "UD Makmur",
      buyer: "PT Sari Mas Permai",
      ton: "25",
      buy: "7.000",
      sell: "7.350",
      margin: "Rp 8,75 jt",
    },
    {
      id: "KOP-090",
      supplier: "CV Sumber Makmur",
      buyer: "PT Agro Prima",
      ton: "40",
      buy: "6.950",
      sell: "7.250",
      margin: "Rp 12 jt",
    },
    {
      id: "KOP-089",
      supplier: "Koperasi Tani",
      buyer: "PT Sari Mas Permai",
      ton: "58,5",
      buy: "7.100",
      sell: "7.400",
      margin: "Rp 17,55 jt",
    },
  ],
  ships: [
    {
      id: "SHP-0268",
      maritime: "PT Nusantara Maritime",
      vessel: "MV Bintang Laut",
      voyage: "026E",
      route: "Bitung → Tanjung Perak",
      containers: "12",
      progress: 68,
      status: "Berlayar",
    },
    {
      id: "SHP-0267",
      maritime: "PT Samudra Logistik",
      vessel: "KM Bahari Jaya",
      voyage: "118",
      route: "Makassar → Tanjung Perak",
      containers: "18",
      progress: 35,
      status: "Berlayar",
    },
    {
      id: "SHP-0266",
      maritime: "PT Nusantara Maritime",
      vessel: "MV Laut Makmur",
      voyage: "021W",
      route: "Manado → Tanjung Priok",
      containers: "8",
      progress: 100,
      status: "Selesai",
    },
  ],
  docs: [
    {
      type: "BL",
      no: "BL-0268-001",
      order: "ORD-0268",
      container: "MSCU1234567",
      port: "Tanjung Perak",
      factory: "PT Sari Mas Permai",
      release: "—",
      status: "Valid",
    },
    {
      type: "DO",
      no: "DO-0268-001",
      order: "ORD-0268",
      container: "MSCU1234567",
      port: "Tanjung Perak",
      factory: "PT Sari Mas Permai",
      release: "Ready",
      status: "Valid",
    },
    {
      type: "DO",
      no: "DO-0267-001",
      order: "ORD-0267",
      container: "TGHU8822110",
      port: "Tanjung Perak",
      factory: "PT Agro Prima",
      release: "Menunggu",
      status: "Menunggu",
    },
  ],
  ports: [
    {
      port: "Pelabuhan Tanjung Perak",
      container: "MSCU1234567",
      status: "Ready for Pickup",
      note: "DO valid • Truck dapat dijadwalkan",
    },
    {
      port: "Pelabuhan Tanjung Perak",
      container: "TGHU8822110",
      status: "Menunggu DO",
      note: "Jangan release sebelum DO valid",
    },
    {
      port: "Pelabuhan Bitung",
      container: "FSCU7711223",
      status: "Gate In",
      note: "Menunggu loading kapal",
    },
  ],
  trucks: [
    {
      plate: "L 8231 AB",
      container: "MSCU1234567",
      driver: "Budi Santoso",
      factory: "PT Sari Mas Permai",
      pickup: "Tanjung Perak",
      progress: 42,
      status: "Menuju Pabrik",
    },
    {
      plate: "L 9172 CD",
      container: "—",
      driver: "Andi Pratama",
      factory: "PT Agro Prima",
      pickup: "Pool Surabaya",
      progress: 0,
      status: "Tersedia",
    },
    {
      plate: "W 4432 EF",
      container: "TGHU8822110",
      driver: "Rudi Hartono",
      factory: "PT Agro Prima",
      pickup: "Tanjung Perak",
      progress: 12,
      status: "Menunggu DO",
    },
  ],
  customers: [
    {
      name: "PT Sari Mas Permai",
      pic: "Dimas — 0812 3456 789",
      type: "Customer / Pabrik",
      address: "Surabaya",
    },
    {
      name: "PT Agro Prima",
      pic: "Rina — 0821 7788 9900",
      type: "Customer / Pabrik",
      address: "Gresik",
    },
    {
      name: "PT Nusantara Maritime",
      pic: "Fajar — 0813 4567 1234",
      type: "Perusahaan Maritim",
      address: "Surabaya",
    },
    {
      name: "CV Sumber Makmur",
      pic: "Budi — 0813 4567 1234",
      type: "Supplier",
      address: "Makassar",
    },
  ],
};

const titles = {
  dashboard: "Dashboard",
  orders: "Order Customer",
  kopra: "Transaksi Kopra",
  shipping: "Shipping & Kapal",
  documents: "BL & DO",
  ports: "Pelabuhan",
  trucking: "Trucking",
  customers: "Customer / Pabrik",
  finance: "Keuangan",
  reports: "Laporan",
};

// DOM Helpers
const $ = (selector) => document.querySelector(selector);

function getBadge(status) {
  let color = "gray";
  if (["Valid", "Selesai", "Tersedia"].includes(status)) {
    color = "green";
  } else if (["Menunggu", "Menunggu DO"].includes(status)) {
    color = "yellow";
  } else if (
    ["Shipping", "Berlayar", "Ready for Pickup", "Menuju Pabrik"].includes(
      status
    )
  ) {
    color = "blue";
  }
  return `<span class="badge ${color}">${status}</span>`;
}

// Render Components
function render() {
  // Orders Table
  $("#ordersTable").innerHTML = data.orders
    .map(
      (o) => `
    <tr>
      <td class="id">${o.id}</td>
      <td><b>${o.customer}</b></td>
      <td>${o.origin}</td>
      <td>${o.mode}</td>
      <td>${o.factory}</td>
      <td>${o.container}</td>
      <td>${getBadge(o.status)}</td>
    </tr>
  `
    )
    .join("");

  // Kopra Table
  $("#kopraTable").innerHTML = data.kopra
    .map(
      (k) => `
    <tr>
      <td class="id">${k.id}</td>
      <td>${k.supplier}</td>
      <td>${k.buyer}</td>
      <td>${k.ton} ton</td>
      <td>Rp ${k.buy}</td>
      <td>Rp ${k.sell}</td>
      <td><b>${k.margin}</b></td>
    </tr>
  `
    )
    .join("");

  // Ship Grid
  $("#shipGrid").innerHTML = data.ships
    .map(
      (s) => `
    <div class="ship">
      <div class="ship-top">
        <div class="circle">⚓</div>
        <div>
          <h3>${s.vessel}</h3>
          <small>${s.maritime} · Voyage ${s.voyage}</small>
        </div>
      </div>
      <p>${s.route}</p>
      <div class="status-row">
        ${getBadge(s.status)}
       <div class="container-display">
    <strong>
      Container (${Array.isArray(s.containers) ? s.containers.length : 0})
    </strong>

    ${
      Array.isArray(s.containers)
        ? s.containers
            .map(
              (container, index) => `
                <div class="container-item">
                  ${index + 1}. ${container}
                </div>
              `
            )
            .join("")
        : ""
    }
  </div>
      </div>
      <div class="progress"><i style="width:${s.progress}%"></i></div>
      <small>${s.progress}% voyage</small>
    </div>
  `
    )
    .join("");

  // Documents Table
  $("#docTable").innerHTML = data.docs
    .map(
      (x) => `
    <tr>
      <td><b>${x.type}</b><br>${x.no}</td>
      <td>${x.order}</td>
      <td>${x.container}</td>
      <td>${x.port}</td>
      <td>${x.factory}</td>
      <td>${x.release}</td>
      <td>${getBadge(x.status)}</td>
    </tr>
  `
    )
    .join("");

  // Port Grid
  $("#portGrid").innerHTML = data.ports
    .map(
      (x) => `
    <div class="port">
      <div class="status-row">
        <h3>${x.port}</h3>
        ${getBadge(x.status)}
      </div>
      <p>Container: <b>${x.container}</b></p>
      <div class="meta">${x.note}</div>
    </div>
  `
    )
    .join("");

  // Truck Grid
  $("#truckGrid").innerHTML = data.trucks
    .map(
      (x) => `
    <div class="truck">
      <div class="status-row">
        <h3>${x.plate}</h3>
        ${getBadge(x.status)}
      </div>
      <p>Container: <b>${x.container}</b></p>
      <p>
  Driver:
  <button
    class="driver-link"
    onclick="showDriverHistory('${x.driver}')"
  >
    ${x.driver}
  </button>
</p>
      <p>Pickup: ${x.pickup}</p>
      <p>Tujuan: <b>${x.factory}</b></p>
      <div class="progress"><i style="width:${x.progress}%"></i></div>
      <small>${x.progress}% perjalanan</small>
    </div>
  `
    )
    .join("");

  // Customer Grid
  $("#customerGrid").innerHTML = data.customers
    .map(
      (x) => `
    <div class="person">
      <div class="person-top">
        <div class="circle">${x.name.slice(0, 2).toUpperCase()}</div>
        <div>
          <h3>${x.name}</h3>
          <small>${x.type}</small>
        </div>
      </div>
      <div class="meta">
        PIC: <b>${x.pic}</b><br>
        Lokasi: ${x.address}
      </div>
    </div>
  `
    )
    .join("");

  // Dashboard Overview
  $("#shipmentList").innerHTML = data.ships
    .slice(0, 3)
    .map(
      (s) => `
    <div>
      <div>
        <b>${s.id} · ${s.vessel}</b>
        <small>${s.route} · ${s.containers} container</small>
      </div>
      ${getBadge(s.status)}
    </div>
  `
    )
    .join("");

  $("#docList").innerHTML = data.docs
    .map(
      (x) => `
    <div>
      <div>
        <b>${x.type} · ${x.no}</b>
        <small>${x.container} → ${x.factory}</small>
      </div>
      ${getBadge(x.status)}
    </div>
  `
    )
    .join("");
}

// Navigation Events
document.addEventListener("click", (e) => {
  const navBtn = e.target.closest("[data-page]");
  if (navBtn) {
    const targetPage = navBtn.dataset.page;

    document
      .querySelectorAll(".page")
      .forEach((page) => page.classList.remove("active-page"));
    $("#" + targetPage).classList.add("active-page");

    document.querySelectorAll(".nav").forEach((nav) => {
      nav.classList.toggle("active", nav.dataset.page === targetPage);
    });

    $("#pageTitle").textContent = titles[targetPage];
    $(".sidebar").classList.remove("open");
  }
});

$("#mobileMenu").onclick = () => $(".sidebar").classList.toggle("open");

// Modal Controls
function openModal(id) {
  $("#" + id).classList.add("show");
}

function closeModal(id) {
  $("#" + id).classList.remove("show");
}

document.querySelectorAll(".modal-wrap").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
});

// Notification Toast
function toast(message) {
  const toastEl = $("#toast");
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2200);
}

// Forms Submission Handlers
$("#orderForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  data.orders.unshift({
    id: "ORD-0" + (269 + data.orders.length),
    customer: formData.get("customer"),
    origin: formData.get("origin"),
    mode: formData.get("mode"),
    factory: formData.get("factory"),
    container: formData.get("container") || "—",
    status: "Menunggu DO",
  });

  render();
  e.target.reset();
  closeModal("orderModal");
  toast("Order customer berhasil dibuat");
};

$("#kopraForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const marginCalc =
    (+formData.get("sell") - +formData.get("buy")) *
    +formData.get("ton") *
    1000;

  data.kopra.unshift({
    id: "KOP-" + (92 + data.kopra.length),
    supplier: formData.get("supplier"),
    buyer: formData.get("buyer"),
    ton: formData.get("ton"),
    buy: Number(formData.get("buy")).toLocaleString("id-ID"),
    sell: Number(formData.get("sell")).toLocaleString("id-ID"),
    margin: "Rp " + (marginCalc / 1e6).toFixed(2) + " jt",
  });

  render();
  e.target.reset();
  closeModal("kopraModal");
  toast("Transaksi kopra tersimpan");
};

$("#shipForm").onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const jumlah = parseInt(formData.get("jumlah_container"));

  const containers = [];

  for (let i = 1; i <= jumlah; i++) {
    const nomor = formData.get(`container${i}`);

    if (nomor) {
      containers.push(nomor);
    }
  }

  data.ships.unshift({
    id: "SHP-NEW",
    maritime: formData.get("maritime"),
    vessel: formData.get("vessel"),
    voyage: formData.get("voyage"),
    route: `${formData.get("origin")} → ${formData.get("destination")}`,

    // Semua container tersimpan
    containers: containers,

    // Jumlah container
    jumlah_container: jumlah,

    progress: 0,
    status: "Booking",
  });

  render();
  e.target.reset();
  closeModal("shipModal");
  toast("Booking kapal tersimpan");
};

$("#docForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const type = formData.get("type").startsWith("Bill") ? "BL" : "DO";

  data.docs.unshift({
    type: type,
    no: formData.get("no"),
    order: "ORD-NEW",
    container: formData.get("container"),
    port: formData.get("port"),
    factory: formData.get("factory"),
    release: type === "DO" ? "Menunggu" : "—",
    status: "Menunggu",
  });

  render();
  e.target.reset();
  closeModal("docModal");
  toast(type + " berhasil ditambahkan");
};

$("#portForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  data.ports.unshift({
    port: formData.get("port"),
    container: formData.get("container"),
    status: formData.get("status"),
    note: "Data port call baru",
  });

  render();
  e.target.reset();
  closeModal("portModal");
  toast("Port call tersimpan");
};

$("#truckForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  data.trucks.unshift({
    plate: formData.get("plate"),
    container: formData.get("container"),
    driver: formData.get("driver"),
    factory: formData.get("factory"),
    pickup: formData.get("pickup"),
    progress: 0,
    status: "Menunggu Pickup",
  });

  render();
  e.target.reset();
  closeModal("truckModal");
  toast("Trucking berhasil ditugaskan");
};

$("#customerForm").onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  data.customers.unshift({
    name: formData.get("name"),
    pic: formData.get("pic"),
    type: formData.get("type"),
    address: formData.get("address"),
  });

  render();
  e.target.reset();
  closeModal("customerModal");
  toast("Perusahaan berhasil ditambahkan");
};

// Search Listener
$("#orderSearch").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll("#ordersTable tr").forEach((row) => {
    row.style.display = row.innerText.toLowerCase().includes(query)
      ? ""
      : "none";
  });
});

const jumlahContainer = document.getElementById("jumlahContainer");

const containerList = document.getElementById("containerList");

jumlahContainer.addEventListener("change", function () {
  const jumlah = parseInt(this.value);

  containerList.innerHTML = "";

  if (!jumlah) {
    containerList.innerHTML = "<p>Pilih jumlah container terlebih dahulu.</p>";
    return;
  }

  for (let i = 1; i <= jumlah; i++) {
    const label = document.createElement("label");

    label.innerHTML = `
      Container ${i}
      <input
        type="text"
        name="container${i}"
        placeholder="Nomor container ${i}"
        required
      />
    `;

    containerList.appendChild(label);
  }
});

// Initializing Render
render();
