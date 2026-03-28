export default function Location() {
  return (
    <>
      <section id="locations" className="section-sm">
        <div className="container">
          <div className="section-head" style={{marginBottom:"3rem"}}>
            <div className="reveal">
              <span className="eyebrow">Наши отделения</span>
            </div>
            <h2 className="section-title reveal d-1" style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)"}}>
              Два центра в Астане
            </h2>
          </div>
          <div className="loc-grid">
            <div className="loc-card reveal d-1">
              <div className="loc-ico">🏛️</div>
              <div>
                <div className="loc-city">г. Астана</div>
                <div className="loc-addr">ул. Казацкая, 88</div>
                <p className="loc-desc">
                  Основное отделение. Круглосуточный приём, стационарное лечение, детоксикация.
                  Полное оснащение для экстренной помощи.
                </p>
              </div>
            </div>
            <div className="loc-card reveal d-2">
              <div className="loc-ico">🌿</div>
              <div>
                <div className="loc-city">г. Астана</div>
                <div className="loc-addr">ул. Творческая, 57</div>
                <p className="loc-desc">
                  Реабилитационное отделение. Длительные программы восстановления, групповая терапия
                  и социальная адаптация.
                </p>
              </div>
            </div>
          </div>
          <p className="loc-note reveal">
            ⚡ Оба отделения оснащены автономной подачей электроэнергии, отопления и воды
          </p>
        </div>
      </section>
    </>
  );
}
