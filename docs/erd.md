# ERD --- Personal Developer Portfolio

**Versi:** 1.0\
**Status:** Model konseptual untuk dokumentasi\
**Catatan:** MVP tidak membutuhkan database. Model ini menggambarkan
hubungan data yang dapat digunakan jika konten kelak dipindahkan ke CMS
atau database.

## 1. Ringkasan

Entitas utama: - `Profile`: informasi pemilik portofolio. - `Project`:
proyek yang ditampilkan. - `ProjectTranslation`: konten proyek dalam
bahasa Indonesia dan Inggris. - `Technology`: teknologi/tools. -
`ProjectTechnology`: relasi many-to-many antara proyek dan teknologi. -
`Experience`: pengalaman kerja, organisasi, atau akademik. -
`ExperienceTranslation`: teks pengalaman per bahasa. - `Education`:
pendidikan. - `SocialLink`: tautan profesional. - `SiteTranslation`:
teks antarmuka dan konten global per bahasa.

## 2. ERD (Mermaid)

``` mermaid
erDiagram
    PROFILE ||--o{ EXPERIENCE : has
    PROFILE ||--o{ EDUCATION : has
    PROFILE ||--o{ SOCIAL_LINK : publishes
    PROJECT ||--|{ PROJECT_TRANSLATION : has
    PROJECT ||--o{ PROJECT_TECHNOLOGY : uses
    TECHNOLOGY ||--o{ PROJECT_TECHNOLOGY : included_in
    EXPERIENCE ||--|{ EXPERIENCE_TRANSLATION : has
    SITE_TRANSLATION }o..|| PROFILE : presents

    PROFILE {
        string id PK
        string full_name
        string role
        string email
        string location
        string cv_url_id
        string cv_url_en
        string avatar_url
        string github_url
        string linkedin_url
    }

    PROJECT {
        string id PK
        string slug UK
        string project_type
        string role
        string thumbnail_url
        string repository_url
        string demo_url
        boolean featured
        int display_order
        date started_at
        date completed_at
    }

    PROJECT_TRANSLATION {
        string id PK
        string project_id FK
        string locale
        string title
        string summary
        string context
        string problem
        string solution
        string outcome
        string process
    }

    TECHNOLOGY {
        string id PK
        string name UK
        string category
        string icon_name
    }

    PROJECT_TECHNOLOGY {
        string project_id PK, FK
        string technology_id PK, FK
    }

    EXPERIENCE {
        string id PK
        string organization
        string role
        date started_at
        date ended_at
        boolean current
        int display_order
    }

    EXPERIENCE_TRANSLATION {
        string id PK
        string experience_id FK
        string locale
        string description
    }

    EDUCATION {
        string id PK
        string institution
        string qualification
        string field_of_study
        date started_at
        date ended_at
        string notes
    }

    SOCIAL_LINK {
        string id PK
        string platform
        string url
        int display_order
    }

    SITE_TRANSLATION {
        string id PK
        string locale UK
        string home_hero_title
        string home_hero_description
        string about_intro
        string contact_heading
        string footer_text
    }
```

## 3. Relasi dan aturan

-   Satu `Project` dapat memiliki banyak `ProjectTranslation`, satu per
    locale (`id`, `en`).
-   Kombinasi `project_id + locale` harus unik.
-   Satu `Project` dapat menggunakan banyak `Technology`, dan satu
    `Technology` dapat dipakai banyak proyek; relasi disimpan melalui
    `ProjectTechnology`.
-   Satu `Experience` dapat memiliki terjemahan untuk beberapa locale.
-   `Profile` menyimpan satu profil pemilik. Untuk MVP, data profil
    dapat tetap berupa file statis.
-   `SocialLink` menyimpan tautan eksternal yang ditampilkan di footer
    atau halaman Contact.
-   `SiteTranslation` menyimpan teks UI global yang tidak termasuk ke
    konten proyek.

## 4. Constraints yang disarankan

-   `locale` hanya menerima `id` atau `en`.
-   `slug` harus unik dan stabil agar URL proyek tidak berubah tanpa
    alasan.
-   URL repository/demo boleh kosong, tetapi tombolnya tidak ditampilkan
    jika nilainya tidak tersedia.
-   `completed_at` boleh kosong untuk proyek yang masih berjalan.
-   Jangan menyimpan secret, token, atau kredensial di data portofolio.
-   Jangan menambahkan data pengunjung atau form submission ke model ini
    kecuali ada kebutuhan produk yang jelas.

## 5. Implementasi MVP tanpa database

Gunakan file TypeScript/JSON sebagai sumber konten:

-   `src/content/profile.ts`
-   `src/content/projects.ts`
-   `src/content/experience.ts`
-   `src/content/education.ts`
-   `src/content/translations.ts`

ERD ini menjadi acuan jika kelak konten dipindahkan ke CMS atau database
relasional. Untuk MVP statis, tidak perlu membuat tabel fisik.
