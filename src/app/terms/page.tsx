'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingCart, Users, Shield, AlertCircle, CreditCard, Clock } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="ADINDA ERSA OKTAFIA Logo" className="w-10 h-10 rounded-full" />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ADINDA ERSA OKTAFIA
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Syarat & Ketentuan
          </h1>
          <p className="text-lg text-gray-600">
            Syarat & Ketentuan Layanan untuk <span className="font-bold text-orange-600">ADINDA ERSA OKTAFIA</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-800">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di Kedai <span className="font-bold text-orange-600">ADINDA ERSA OKTAFIA</span>. Syarat & Ketentuan ini mengatur penggunaan layanan kami, termasuk pemesanan online, pengiriman makanan, dan layanan terkait lainnya. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Layanan Kami</h2>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">ADINDA ERSA OKTAFIA</span> menyediakan layanan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pemesanan makanan dan minuman online</li>
                <li>Pengiriman ke alamat pelanggan</li>
                <li>Pemesanan takeaway (ambil sendiri)</li>
                <li>Reservasi tempat duduk</li>
                <li>Layanan pelanggan dan dukungan</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Kewajiban Pengguna</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memelihara keamanan akun dan kata sandi Anda</li>
                <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
                <li>Menghormati hak properti intelektual kami</li>
                <li>Tidak mengganggu atau merusak sistem kami</li>
                <li>Mematuhi semua peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Ordering Terms */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Ketentuan Pemesanan</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proses Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Pesanan harus dikonfirmasi sebelum diproses</li>
                    <li>Kami berhak menolak pesanan tanpa alasan</li>
                    <li>Perubahan pesanan dapat dilakukan sebelum konfirmasi</li>
                    <li>Waktu pengiriman perkiraan dapat berubah</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pembatalan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Pembatalan dapat dilakukan maksimal 30 menit sebelum pengiriman</li>
                    <li>Pembatalan setelah waktu tersebut dapat dikenakan biaya</li>
                    <li>Pengembalian dana akan diproses sesuai kebijakan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Pembayaran</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Kami menerima metode pembayaran berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tunai (cash on delivery)</li>
                <li>Transfer bank</li>
                <li>E-wallet (sesuai ketersediaan)</li>
                <li>Kartu kredit/debit (sesuai ketersediaan)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Semua transaksi dilindungi dengan enkripsi data untuk keamanan Anda.
              </p>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-800">Pengiriman</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Area Pengiriman</h3>
                  <p className="text-gray-700">
                    Kami melayani pengiriman di area Krian dan sekitarnya. Untuk area di luar jangkauan kami, silakan hubungi kami untuk informasi lebih lanjut.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Biaya Pengiriman</h3>
                  <p className="text-gray-700">
                    Biaya pengiriman ditentukan berdasarkan jarak dan berat pesanan. Biaya akan ditampilkan sebelum konfirmasi pemesanan.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Waktu Pengiriman</h3>
                  <p className="text-gray-700">
                    Waktu pengiriman perkiraan 30-60 menit tergantung pada jarak dan kondisi lalu lintas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Batasan Tanggung Jawab</h2>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">ADINDA ERSA OKTAFIA</span> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Keterlambatan pengiriman karena faktor eksternal</li>
                <li>Kerusakan makanan selama pengiriman</li>
                <li>Alergi atau reaksi terhadap makanan</li>
                <li>Kehilangan pesanan karena alamat yang salah</li>
                <li>Kerugian tidak langsung atau konsekuensial</li>
              </ul>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="shadow-sm border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Penting Diperhatikan</h2>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Informasi Alergi:</span> Mohon informasikan jika Anda memiliki alergi makanan tertentu saat melakukan pemesanan.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Keamanan Makanan:</span> Kami menjamin keamanan dan kualitas makanan yang kami sajikan sesuai standar kesehatan yang berlaku.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-800">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-orange-800 mb-2">ADINDA ERSA OKTAFIA</p>
                <p className="text-gray-700">📍 DSN.TAMBAK UTARA, Desa Tambakkemerakan, Krian, Sidoarjo, Jawa Timur 61262</p>
                <p className="text-gray-700">📞 085353874912</p>
                <p className="text-gray-700">🕐 Senin - Minggu: 08:00 - 22:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-100">
            &copy; 2024 ADINDA ERSA OKTAFIA. Hak Cipta Dilindungi.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-orange-100 hover:text-white">
              Kebijakan Privasi
            </Link>
            <span className="text-orange-100">|</span>
            <Link href="/terms" className="text-orange-100 hover:text-white">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}