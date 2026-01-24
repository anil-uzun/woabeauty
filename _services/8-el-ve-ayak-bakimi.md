---
layout: featured

title_tr: El ve Ayak Bakımı

number: 8

permalink: hizmetler/el-ve-ayak-bakimi

type: el-ayak
categories: [service]
icon: /assets/img/icons/air-freshener-solid.svg
image: /assets/img/services/08.jpg
---

<div class="row">
    <div class="col-md-12">
        <div class="service-details mb-40">
            <h2>{% translate service_8.header_1 %}</h2>
            <div class="contact-person">
                {% if site.lang == "tr" %}
                <b><a href="/sayfalar/iletisim"><span><i class="fas fa-phone"></i>{% translate service_8.btn_1 %}</span></a></b><p></p>
                {% endif %}
                {% if site.lang == "en" %}
                <b><a href="/en/pages/contact"><span><i class="fas fa-phone"></i>{% translate service_8.btn_1 %}</span></a></b><p></p>
                {% endif %}
            </div>
            {% translate service_8.text_1 %}
            <br>
        </div>
    </div>
</div>