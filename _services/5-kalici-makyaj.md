---
layout: featured
title_tr: Kalıcı Makyaj

permalink: hizmetler/kalici-makyaj

number: 5

categories: [service]
image: /assets/img/services/05.jpg
icon: /assets/img/icons/layer-group-solid.svg

---

<div class="row">
    <div class="col-md-12">
        <div class="service-details mb-40">
                <h3>{% translate service_5.header_1 %}</h3>
            <div class="contact-person">
                {% if site.lang == "tr" %}
                <b><a href="/sayfalar/iletisim"><span><i class="fas fa-phone"></i>{% translate service_5.btn_1 %}</span></a></b><p></p>
                {% endif %}
                {% if site.lang == "en" %}
                <b><a href="/en/pages/contact"><span><i class="fas fa-phone"></i>{% translate service_5.btn_1 %}</span></a></b><p></p>
                {% endif %}
            </div>
            {% translate service_5.text_1 %}
        </div>
    </div>
</div>