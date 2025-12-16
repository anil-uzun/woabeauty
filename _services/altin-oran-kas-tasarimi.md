---
layout: featured

title_tr: Altın Oran Kaş Tasarımı

permalink: hizmetler/altin-oran-kas-tasarimi

number: 1
type: yüz
categories: [service]
icon: /assets/img/icons/address-card-solid.svg
image: /assets/img/services/01.jpg
---

<div class="row">
    <div class="col-md-12">
        <div class="service-details mb-40">
            <h3>{% translate service_1.header_1 %}</h3>
            <div class="contact-person">
                {% if site.lang == "tr" %}
                <b><a href="/sayfalar/iletisim"><span><i class="fas fa-phone"></i>{% translate service_1.btn_1 %}</span></a></b><p></p>
                {% endif %}
                {% if site.lang == "en" %}
                <b><a href="/en/pages/contact"><span><i class="fas fa-phone"></i>{% translate service_1.btn_1 %}</span></a></b><p></p>
                {% endif %}
            </div>
            {% translate service_1.text_1 %}
        </div>
    </div>
</div>