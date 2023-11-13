<template>
  <div
    class="bg-slate-100 border border-y-2 shadow-md mt-10 container mx-auto space-y-2"
  >
    <div class="container bg-lingga-biru w-full h-32 bg-opacity-25 rounded-md">
      <h3
        class="p-2 mb-2 text-center font-semibold md:text-lg sm:text-sm"
      >
        Table Daftar Caleg
      </h3>
      <div class="container w-full md:w-4/5 xl:w-full mx-auto px-2">
        <div id="recipients" class="p-8 mt-26 lg:mt-0 rounded shadow bg-white">
          <table
            id="example"
            class="stripe hover mt-26"
            style="width: 100%; padding-top: 1em; padding-bottom: 1em"
          >
            <thead>
              <tr>
                <th data-priority="7">No.</th>
                <th data-priority="3">NIK</th>
                <th data-priority="1">Nama</th>
                <th data-priority="2">Caleg</th>
                <th data-priority="4">Wilayah</th>
                <th data-priority="7">Kabupaten</th>
                <th data-priority="5">Dapil</th>
                <th data-priority="6">Urut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>3216011301730002</td>
                <td>Saptadi Nurfarid</td>
                <td>DPR RI</td>
                <td>Jawa Tengah</td>
                <td>-</td>
                <td>7</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>3216011511730001</td>
                <td>Bambang Priyadi</td>
                <td>DPR RI</td>
                <td>Jawa Tengah</td>
                <td>-</td>
                <td>5</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>3226311312750001</td>
                <td>Ir. Ridwan Sukarya</td>
                <td>DPR RI</td>
                <td>Jawa Barat</td>
                <td>-</td>
                <td>3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2116211201720002</td>
                <td>Putu Wisesa,S.H,M.H</td>
                <td>DPRD Propinsi</td>
                <td>Bali</td>
                <td>-</td>
                <td>3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5</td>
                <td>2456210201720012</td>
                <td>Piliang Putra Minang</td>
                <td>DPRD Kota/Kab</td>
                <td>Kota Padang</td>
                <td>Kec.Siraman, Kec.Dahili, Kec. Pirang</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
