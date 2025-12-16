'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Cookie, Database, UserCheck } from 'lucide-react'

export default function Privacy() {
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
            <Shield className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-gray-600">
            Kebijakan Privasi untuk <span className="font-bold text-orange-600">ADINDA ERSA OKTAFIA</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-800">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di Kedai <span className="font-bold text-orange-600">ADINDA ERSA OKTAFIA</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami, termasuk website, aplikasi mobile, dan layanan pemesanan online.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Data yang Kami Kumpulkan</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Informasi sistem operasi</li>
                    <li>Data penggunaan website</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Penggunaan Data</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memproses dan menyelesaikan pesanan Anda</li>
                <li>Menyediakan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi tentang pesanan dan promosi</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Melakukan analisis untuk pengembangan bisnis</li>
                <li>Memastikan keamanan dan mencegah penipuan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Keamanan Data</h2>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">ADINDA ERSA OKTAFIA</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data sensitif dengan teknologi terkini</li>
                <li>Akses terbatas kepada data pribadi Anda</li>
                <li>Server yang aman dan terlindungi</li>
                <li>Prosedur keamanan yang ketat untuk karyawan</li>
                <li>Pemantauan rutin terhadap sistem keamanan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Cookie className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Kebijakan Cookie</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Website kami menggunakan cookie untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Menyediakan pengalaman yang personal</li>
                <li>Menampilkan iklan yang relevan</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Anda dapat mengatur cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">Hak Anda</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mengakses data pribadi yang kami simpan</li>
                <li>Memperbarui atau mengoreksi data Anda</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-800">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, silakan hubungi kami:
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