var N=null,E="",T="t",U="u",searchIndex={};
var r_Ac="Gets the slice of internal data.",r_Bc="pretty",r_Cc="Pretty prints the polynomial.",r_Dc="to_owned",r_Ec="clone_into",r_Fc="clone",r_wc="Manipulations and data types that represent polynomial.",r_xc="Polynomial expression",r_yc="Creates new `Polynomial`.",r_zc="Evaluates the polynomial value.";
var r_0a="num_traits::ops",r_0b="Bounded",r_1a="mul_add",r_1b="ToPrimitive",r_2a="Fused multiply-add. Computes `(self * a) + b` with only…",r_2b="FromPrimitive",r_3a="Output",r_3b="NumCast",r_4a="Performs the fused multiply-add operation.",r_4b="AsPrimitive",r_5a="The result after applying the operator.",r_5b="FloatCore",r_6a="ceil",r_6b="Float",r_7a="Returns `true` if `self` is positive, including `+0.0`,…",r_7b="FloatConst",r_8a="Returns `true` if `self` is negative, including `-0.0`,…",r_8b="PrimInt",r_9a="Take the reciprocal (inverse) of a number, `1/x`.",r_9b="CheckedAdd",r_Aa="floor",r_Ab="exp_m1",r_Ba="Returns the largest integer less than or equal to a number.",r_Bb="Returns `e^(self) - 1` in a way that is accurate even if…",r_Ca="Returns the smallest integer greater than or equal to a…",r_Cb="ln_1p",r_Da="round",r_Db="Returns `ln(1+n)` (natural logarithm) more accurately than…",r_Ea="Returns the nearest integer to a number. Round half-way…",r_Eb="Hyperbolic sine function.",r_Fa="trunc",r_Fb="Hyperbolic cosine function.",r_Ga="Return the integer part of a number.",r_Gb="Hyperbolic tangent function.",r_Ha="fract",r_Hb="asinh",r_Ia="Returns the fractional part of a number.",r_Ib="Inverse hyperbolic sine function.",r_Ja="Computes the absolute value of `self`. Returns…",r_Jb="acosh",r_Ka="signum",r_Kb="Inverse hyperbolic cosine function.",r_La="Returns a number that represents the sign of `self`.",r_Lb="atanh",r_Ma="is_sign_positive",r_Mb="Inverse hyperbolic tangent function.",r_Na="is_sign_negative",r_Nb="Computes the absolute value.",r_Oa="recip",r_Ob="Returns the sign of the number.",r_Pa="Raise a number to an integer power.",r_Pb="result",r_Qa="to_degrees",r_Qb="try_from",r_Ra="to_radians",r_Rb="from",r_Sa="Returns the maximum of the two numbers.",r_Sb="try_into",r_Ta="Returns the minimum of the two numbers.",r_Tb="borrow",r_Ua="integer_decode",r_Ub="borrow_mut",r_Va="Returns the mantissa, base 2 exponent, and sign as…",r_Vb="get_type_id",r_Wa="u32",r_Wb="typeid",r_Xa="Shifts the bits to the left by a specified amount amount,…",r_Xb="formatter",r_Ya="Shifts the bits to the right by a specified amount amount,…",r_Yb="ParseFloatError",r_Za="Shifts a number to the left, checking for overflow. If…",r_Zb="FloatErrorKind",r_aa="num_traits",r_ab="powi",r_ac="CheckedSub",r_ba="self",r_bb="Take the square root of a number.",r_bc="CheckedMul",r_ca="option",r_cb="Returns `e^(self)`, (the exponential function).",r_cc="CheckedDiv",r_da="isize",r_db="Returns `2^(self)`.",r_dc="CheckedRem",r_ea="usize",r_eb="Returns the natural logarithm of the number.",r_ec="CheckedNeg",r_fa="min_value",r_fb="Returns the logarithm of the number with respect to an…",r_fc="CheckedShl",r_ga="max_value",r_gb="Returns the base 2 logarithm of the number.",r_gc="CheckedShr",r_ha="bool",r_hb="log10",r_hc="MulAdd",r_ia="infinity",r_ib="Returns the base 10 logarithm of the number.",r_ic="MulAddAssign",r_ja="neg_infinity",r_jb="Converts radians to degrees.",r_jc="Saturating",r_ka="neg_zero",r_kb="Converts degrees to radians.",r_kc="WrappingAdd",r_la="Returns `-0.0`.",r_lb="abs_sub",r_lc="WrappingSub",r_ma="Returns the smallest finite value that this type can…",r_mb="The positive difference of two numbers.",r_mc="WrappingMul",r_na="min_positive_value",r_nb="Take the cubic root of a number.",r_nc="WrappingShl",r_oa="Returns the smallest positive, normalized value that this…",r_ob="hypot",r_oc="WrappingShr",r_pa="epsilon",r_pb="Calculate the length of the hypotenuse of a right-angle…",r_pc="Signed",r_qa="Returns epsilon, a small positive value.",r_qb="Computes the sine of a number (in radians).",r_qc="polynomial",r_ra="Returns the largest finite value that this type can…",r_rb="Computes the cosine of a number (in radians).",r_rc="string",r_sa="is_nan",r_sb="Computes the tangent of a number (in radians).",r_sc="into",r_ta="is_infinite",r_tb="Computes the arcsine of a number. Return value is in…",r_tc="zero",r_ua="is_finite",r_ub="Computes the arccosine of a number. Return value is in…",r_uc="is_zero",r_va="is_normal",r_vb="Computes the arctangent of a number. Return value is in…",r_vc="Polynomial",r_wa="Returns `true` if the number is neither zero, infinite,…",r_wb="atan2",r_xa="classify",r_xb="Computes the four quadrant arctangent of `self` (`y`) and…",r_ya="Returns the floating point category of the number. If only…",r_yb="sin_cos",r_za="fpcategory",r_zb="Simultaneously computes the sine and cosine of the number,…";
searchIndex[r_qc]={"doc":r_wc,"i":[[3,r_vc,r_qc,r_xc,N,N],[11,"new",E,r_yc,0,[[["vec"]],[r_qc]]],[11,"eval",E,r_zc,0,[[[r_ba],[T]],[T]]],[11,"data",E,r_Ac,0,N],[11,r_Bc,E,r_Cc,0,[[[r_ba],["str"]],[r_rc]]],[11,r_Rb,E,E,0,[[[T]],[T]]],[11,r_sc,E,E,0,[[[r_ba]],[U]]],[11,r_Dc,E,E,0,[[[r_ba]],[T]]],[11,r_Ec,E,E,0,N],[11,r_Qb,E,E,0,[[[U]],[r_Pb]]],[11,r_Tb,E,E,0,[[[r_ba]],[T]]],[11,r_Vb,E,E,0,[[[r_ba]],[r_Wb]]],[11,r_Sb,E,E,0,[[[r_ba]],[r_Pb]]],[11,r_Ub,E,E,0,[[[r_ba]],[T]]],[11,"eq",E,E,0,[[[r_ba],[r_qc]],[r_ha]]],[11,"ne",E,E,0,[[[r_ba],[r_qc]],[r_ha]]],[11,r_Fc,E,E,0,[[[r_ba]],[r_qc]]],[11,"fmt",E,E,0,[[[r_ba],[r_Xb]],[r_Pb]]],[11,"add",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"add",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"sub",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"sub",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"mul",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"mul",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"neg",E,E,0,[[[r_ba]],[r_qc]]],[11,r_tc,E,E,0,[[],[r_qc]]],[11,r_uc,E,E,0,[[[r_ba]],[r_ha]]],[11,"one",E,E,0,[[],[r_qc]]]],"p":[[3,r_vc]]};
searchIndex[r_aa]={"doc":"Numeric traits for generic mathematics","i":[[3,r_Yb,r_aa,E,N,N],[12,"kind",E,E,0,N],[4,r_Zb,E,E,N,N],[13,"Empty",E,E,1,N],[13,"Invalid",E,E,1,N],[5,"clamp",E,"A value bounded by a minimum and a maximum",N,[[[T],[T],[T]],[T]]],[0,"bounds",E,E,N,N],[8,r_0b,"num_traits::bounds","Numbers which have upper and lower bounds",N,N],[10,r_fa,E,"returns the smallest finite number this type can represent",2,[[],[r_ba]]],[10,r_ga,E,"returns the largest finite number this type can represent",2,[[],[r_ba]]],[0,"cast",r_aa,E,N,N],[5,"cast","num_traits::cast","Cast from one machine scalar to another.",N,[[[T]],[r_ca]]],[8,r_1b,E,"A generic trait for converting a value to a number.",N,N],[11,"to_isize",E,"Converts the value of `self` to an `isize`.",3,[[[r_ba]],[r_ca,[r_da]]]],[11,"to_i8",E,"Converts the value of `self` to an `i8`.",3,[[[r_ba]],[r_ca,["i8"]]]],[11,"to_i16",E,"Converts the value of `self` to an `i16`.",3,[[[r_ba]],[r_ca,["i16"]]]],[11,"to_i32",E,"Converts the value of `self` to an `i32`.",3,[[[r_ba]],[r_ca,["i32"]]]],[10,"to_i64",E,"Converts the value of `self` to an `i64`.",3,[[[r_ba]],[r_ca,["i64"]]]],[11,"to_i128",E,"Converts the value of `self` to an `i128`.",3,[[[r_ba]],[r_ca,["i128"]]]],[11,"to_usize",E,"Converts the value of `self` to a `usize`.",3,[[[r_ba]],[r_ca,[r_ea]]]],[11,"to_u8",E,"Converts the value of `self` to an `u8`.",3,[[[r_ba]],[r_ca,["u8"]]]],[11,"to_u16",E,"Converts the value of `self` to an `u16`.",3,[[[r_ba]],[r_ca,["u16"]]]],[11,"to_u32",E,"Converts the value of `self` to an `u32`.",3,[[[r_ba]],[r_ca,[r_Wa]]]],[10,"to_u64",E,"Converts the value of `self` to an `u64`.",3,[[[r_ba]],[r_ca,["u64"]]]],[11,"to_u128",E,"Converts the value of `self` to an `u128`.",3,[[[r_ba]],[r_ca,["u128"]]]],[11,"to_f32",E,"Converts the value of `self` to an `f32`.",3,[[[r_ba]],[r_ca,["f32"]]]],[11,"to_f64",E,"Converts the value of `self` to an `f64`.",3,[[[r_ba]],[r_ca,["f64"]]]],[8,r_2b,E,"A generic trait for converting a number to a value.",N,N],[11,"from_isize",E,"Convert an `isize` to return an optional value of this…",4,[[[r_da]],[r_ca]]],[11,"from_i8",E,"Convert an `i8` to return an optional value of this type.…",4,[[["i8"]],[r_ca]]],[11,"from_i16",E,"Convert an `i16` to return an optional value of this type.…",4,[[["i16"]],[r_ca]]],[11,"from_i32",E,"Convert an `i32` to return an optional value of this type.…",4,[[["i32"]],[r_ca]]],[10,"from_i64",E,"Convert an `i64` to return an optional value of this type.…",4,[[["i64"]],[r_ca]]],[11,"from_i128",E,"Convert an `i128` to return an optional value of this…",4,[[["i128"]],[r_ca]]],[11,"from_usize",E,"Convert a `usize` to return an optional value of this…",4,[[[r_ea]],[r_ca]]],[11,"from_u8",E,"Convert an `u8` to return an optional value of this type.…",4,[[["u8"]],[r_ca]]],[11,"from_u16",E,"Convert an `u16` to return an optional value of this type.…",4,[[["u16"]],[r_ca]]],[11,"from_u32",E,"Convert an `u32` to return an optional value of this type.…",4,[[[r_Wa]],[r_ca]]],[10,"from_u64",E,"Convert an `u64` to return an optional value of this type.…",4,[[["u64"]],[r_ca]]],[11,"from_u128",E,"Convert an `u128` to return an optional value of this…",4,[[["u128"]],[r_ca]]],[11,"from_f32",E,"Convert a `f32` to return an optional value of this type.…",4,[[["f32"]],[r_ca]]],[11,"from_f64",E,"Convert a `f64` to return an optional value of this type.…",4,[[["f64"]],[r_ca]]],[8,r_3b,E,"An interface for casting between machine scalars.",N,N],[10,r_Rb,E,"Creates a number from another value that can be converted…",5,[[[T]],[r_ca]]],[8,r_4b,E,"A generic interface for casting between machine scalars…",N,N],[10,"as_",E,"Convert a value to another, using the `as` operator.",6,[[[r_ba]],[T]]],[0,"float",r_aa,E,N,N],[8,r_5b,"num_traits::float","Generic trait for floating point numbers that works with…",N,N],[10,r_ia,E,"Returns positive infinity.",7,[[],[r_ba]]],[10,r_ja,E,"Returns negative infinity.",7,[[],[r_ba]]],[10,"nan",E,"Returns NaN.",7,[[],[r_ba]]],[10,r_ka,E,r_la,7,[[],[r_ba]]],[10,r_fa,E,r_ma,7,[[],[r_ba]]],[10,r_na,E,r_oa,7,[[],[r_ba]]],[10,r_pa,E,r_qa,7,[[],[r_ba]]],[10,r_ga,E,r_ra,7,[[],[r_ba]]],[11,r_sa,E,"Returns `true` if the number is NaN.",7,[[[r_ba]],[r_ha]]],[11,r_ta,E,"Returns `true` if the number is infinite.",7,[[[r_ba]],[r_ha]]],[11,r_ua,E,"Returns `true` if the number is neither infinite or NaN.",7,[[[r_ba]],[r_ha]]],[11,r_va,E,r_wa,7,[[[r_ba]],[r_ha]]],[10,r_xa,E,r_ya,7,[[[r_ba]],[r_za]]],[11,r_Aa,E,r_Ba,7,[[[r_ba]],[r_ba]]],[11,r_6a,E,r_Ca,7,[[[r_ba]],[r_ba]]],[11,r_Da,E,r_Ea,7,[[[r_ba]],[r_ba]]],[11,r_Fa,E,r_Ga,7,[[[r_ba]],[r_ba]]],[11,r_Ha,E,r_Ia,7,[[[r_ba]],[r_ba]]],[11,"abs",E,r_Ja,7,[[[r_ba]],[r_ba]]],[11,r_Ka,E,r_La,7,[[[r_ba]],[r_ba]]],[11,r_Ma,E,"Returns `true` if `self` is positive, including `+0.0` and…",7,[[[r_ba]],[r_ha]]],[11,r_Na,E,"Returns `true` if `self` is negative, including `-0.0` and…",7,[[[r_ba]],[r_ha]]],[11,"min",E,r_Ta,7,[[[r_ba],[r_ba]],[r_ba]]],[11,"max",E,r_Sa,7,[[[r_ba],[r_ba]],[r_ba]]],[11,r_Oa,E,"Returns the reciprocal (multiplicative inverse) of the…",7,[[[r_ba]],[r_ba]]],[11,r_ab,E,r_Pa,7,[[[r_ba],["i32"]],[r_ba]]],[10,r_Qa,E,"Converts to degrees, assuming the number is in radians.",7,[[[r_ba]],[r_ba]]],[10,r_Ra,E,"Converts to radians, assuming the number is in degrees.",7,[[[r_ba]],[r_ba]]],[10,r_Ua,E,r_Va,7,N],[8,r_6b,E,"Generic trait for floating point numbers",N,N],[10,"nan",E,"Returns the `NaN` value.",8,[[],[r_ba]]],[10,r_ia,E,"Returns the infinite value.",8,[[],[r_ba]]],[10,r_ja,E,"Returns the negative infinite value.",8,[[],[r_ba]]],[10,r_ka,E,r_la,8,[[],[r_ba]]],[10,r_fa,E,r_ma,8,[[],[r_ba]]],[10,r_na,E,r_oa,8,[[],[r_ba]]],[11,r_pa,E,r_qa,8,[[],[r_ba]]],[10,r_ga,E,r_ra,8,[[],[r_ba]]],[10,r_sa,E,"Returns `true` if this value is `NaN` and false otherwise.",8,[[[r_ba]],[r_ha]]],[10,r_ta,E,"Returns `true` if this value is positive infinity or…",8,[[[r_ba]],[r_ha]]],[10,r_ua,E,"Returns `true` if this number is neither infinite nor `NaN`.",8,[[[r_ba]],[r_ha]]],[10,r_va,E,r_wa,8,[[[r_ba]],[r_ha]]],[10,r_xa,E,r_ya,8,[[[r_ba]],[r_za]]],[10,r_Aa,E,r_Ba,8,[[[r_ba]],[r_ba]]],[10,r_6a,E,r_Ca,8,[[[r_ba]],[r_ba]]],[10,r_Da,E,r_Ea,8,[[[r_ba]],[r_ba]]],[10,r_Fa,E,r_Ga,8,[[[r_ba]],[r_ba]]],[10,r_Ha,E,r_Ia,8,[[[r_ba]],[r_ba]]],[10,"abs",E,r_Ja,8,[[[r_ba]],[r_ba]]],[10,r_Ka,E,r_La,8,[[[r_ba]],[r_ba]]],[10,r_Ma,E,r_7a,8,[[[r_ba]],[r_ha]]],[10,r_Na,E,r_8a,8,[[[r_ba]],[r_ha]]],[10,r_1a,E,r_2a,8,[[[r_ba],[r_ba],[r_ba]],[r_ba]]],[10,r_Oa,E,r_9a,8,[[[r_ba]],[r_ba]]],[10,r_ab,E,r_Pa,8,[[[r_ba],["i32"]],[r_ba]]],[10,"powf",E,"Raise a number to a floating point power.",8,[[[r_ba],[r_ba]],[r_ba]]],[10,"sqrt",E,r_bb,8,[[[r_ba]],[r_ba]]],[10,"exp",E,r_cb,8,[[[r_ba]],[r_ba]]],[10,"exp2",E,r_db,8,[[[r_ba]],[r_ba]]],[10,"ln",E,r_eb,8,[[[r_ba]],[r_ba]]],[10,"log",E,r_fb,8,[[[r_ba],[r_ba]],[r_ba]]],[10,"log2",E,r_gb,8,[[[r_ba]],[r_ba]]],[10,r_hb,E,r_ib,8,[[[r_ba]],[r_ba]]],[11,r_Qa,E,r_jb,8,[[[r_ba]],[r_ba]]],[11,r_Ra,E,r_kb,8,[[[r_ba]],[r_ba]]],[10,"max",E,r_Sa,8,[[[r_ba],[r_ba]],[r_ba]]],[10,"min",E,r_Ta,8,[[[r_ba],[r_ba]],[r_ba]]],[10,r_lb,E,r_mb,8,[[[r_ba],[r_ba]],[r_ba]]],[10,"cbrt",E,r_nb,8,[[[r_ba]],[r_ba]]],[10,r_ob,E,r_pb,8,[[[r_ba],[r_ba]],[r_ba]]],[10,"sin",E,r_qb,8,[[[r_ba]],[r_ba]]],[10,"cos",E,r_rb,8,[[[r_ba]],[r_ba]]],[10,"tan",E,r_sb,8,[[[r_ba]],[r_ba]]],[10,"asin",E,r_tb,8,[[[r_ba]],[r_ba]]],[10,"acos",E,r_ub,8,[[[r_ba]],[r_ba]]],[10,"atan",E,r_vb,8,[[[r_ba]],[r_ba]]],[10,r_wb,E,r_xb,8,[[[r_ba],[r_ba]],[r_ba]]],[10,r_yb,E,r_zb,8,N],[10,r_Ab,E,r_Bb,8,[[[r_ba]],[r_ba]]],[10,r_Cb,E,r_Db,8,[[[r_ba]],[r_ba]]],[10,"sinh",E,r_Eb,8,[[[r_ba]],[r_ba]]],[10,"cosh",E,r_Fb,8,[[[r_ba]],[r_ba]]],[10,"tanh",E,r_Gb,8,[[[r_ba]],[r_ba]]],[10,r_Hb,E,r_Ib,8,[[[r_ba]],[r_ba]]],[10,r_Jb,E,r_Kb,8,[[[r_ba]],[r_ba]]],[10,r_Lb,E,r_Mb,8,[[[r_ba]],[r_ba]]],[10,r_Ua,E,r_Va,8,N],[8,r_7b,E,E,N,N],[10,"E",E,"Return Euler’s number.",9,[[],[r_ba]]],[10,"FRAC_1_PI",E,"Return `1.0 / π`.",9,[[],[r_ba]]],[10,"FRAC_1_SQRT_2",E,"Return `1.0 / sqrt(2.0)`.",9,[[],[r_ba]]],[10,"FRAC_2_PI",E,"Return `2.0 / π`.",9,[[],[r_ba]]],[10,"FRAC_2_SQRT_PI",E,"Return `2.0 / sqrt(π)`.",9,[[],[r_ba]]],[10,"FRAC_PI_2",E,"Return `π / 2.0`.",9,[[],[r_ba]]],[10,"FRAC_PI_3",E,"Return `π / 3.0`.",9,[[],[r_ba]]],[10,"FRAC_PI_4",E,"Return `π / 4.0`.",9,[[],[r_ba]]],[10,"FRAC_PI_6",E,"Return `π / 6.0`.",9,[[],[r_ba]]],[10,"FRAC_PI_8",E,"Return `π / 8.0`.",9,[[],[r_ba]]],[10,"LN_10",E,"Return `ln(10.0)`.",9,[[],[r_ba]]],[10,"LN_2",E,"Return `ln(2.0)`.",9,[[],[r_ba]]],[10,"LOG10_E",E,"Return `log10(e)`.",9,[[],[r_ba]]],[10,"LOG2_E",E,"Return `log2(e)`.",9,[[],[r_ba]]],[10,"PI",E,"Return Archimedes’ constant.",9,[[],[r_ba]]],[10,"SQRT_2",E,"Return `sqrt(2.0)`.",9,[[],[r_ba]]],[0,"identities",r_aa,E,N,N],[5,r_tc,"num_traits::identities","Returns the additive identity, `0`.",N,[[],[T]]],[5,"one",E,"Returns the multiplicative identity, `1`.",N,[[],[T]]],[8,"Zero",E,"Defines an additive identity element for `Self`.",N,N],[10,r_tc,E,"Returns the additive identity element of `Self`, `0`.",10,[[],[r_ba]]],[10,r_uc,E,"Returns `true` if `self` is equal to the additive identity.",10,[[[r_ba]],[r_ha]]],[8,"One",E,"Defines a multiplicative identity element for `Self`.",N,N],[10,"one",E,"Returns the multiplicative identity element of `Self`, `1`.",11,[[],[r_ba]]],[11,"is_one",E,"Returns `true` if `self` is equal to the multiplicative…",11,[[[r_ba]],[r_ha]]],[0,"int",r_aa,E,N,N],[8,r_8b,"num_traits::int",E,N,N],[10,"count_ones",E,"Returns the number of ones in the binary representation of…",12,[[[r_ba]],[r_Wa]]],[10,"count_zeros",E,"Returns the number of zeros in the binary representation…",12,[[[r_ba]],[r_Wa]]],[10,"leading_zeros",E,"Returns the number of leading zeros in the binary…",12,[[[r_ba]],[r_Wa]]],[10,"trailing_zeros",E,"Returns the number of trailing zeros in the binary…",12,[[[r_ba]],[r_Wa]]],[10,"rotate_left",E,r_Xa,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"rotate_right",E,r_Ya,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"signed_shl",E,r_Xa,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"signed_shr",E,r_Ya,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"unsigned_shl",E,r_Xa,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"unsigned_shr",E,r_Ya,12,[[[r_ba],[r_Wa]],[r_ba]]],[10,"swap_bytes",E,"Reverses the byte order of the integer.",12,[[[r_ba]],[r_ba]]],[10,"from_be",E,"Convert an integer from big endian to the target's…",12,[[[r_ba]],[r_ba]]],[10,"from_le",E,"Convert an integer from little endian to the target's…",12,[[[r_ba]],[r_ba]]],[10,"to_be",E,"Convert `self` to big endian from the target's endianness.",12,[[[r_ba]],[r_ba]]],[10,"to_le",E,"Convert `self` to little endian from the target's…",12,[[[r_ba]],[r_ba]]],[10,"pow",E,"Raises self to the power of `exp`, using exponentiation by…",12,[[[r_ba],[r_Wa]],[r_ba]]],[0,"ops",r_aa,E,N,N],[0,"checked",r_0a,E,N,N],[8,r_9b,"num_traits::ops::checked","Performs addition that returns `None` instead of wrapping…",N,N],[10,"checked_add",E,"Adds two numbers, checking for overflow. If overflow…",13,[[[r_ba],[r_ba]],[r_ca]]],[8,r_ac,E,"Performs subtraction that returns `None` instead of…",N,N],[10,"checked_sub",E,"Subtracts two numbers, checking for underflow. If…",14,[[[r_ba],[r_ba]],[r_ca]]],[8,r_bc,E,"Performs multiplication that returns `None` instead of…",N,N],[10,"checked_mul",E,"Multiplies two numbers, checking for underflow or…",15,[[[r_ba],[r_ba]],[r_ca]]],[8,r_cc,E,"Performs division that returns `None` instead of panicking…",N,N],[10,"checked_div",E,"Divides two numbers, checking for underflow, overflow and…",16,[[[r_ba],[r_ba]],[r_ca]]],[8,r_dc,E,"Performs an integral remainder that returns `None` instead…",N,N],[10,"checked_rem",E,"Finds the remainder of dividing two numbers, checking for…",17,[[[r_ba],[r_ba]],[r_ca]]],[8,r_ec,E,"Performs negation that returns `None` if the result can't…",N,N],[10,"checked_neg",E,"Negates a number, returning `None` for results that can't…",18,[[[r_ba]],[r_ca]]],[8,r_fc,E,"Performs a left shift that returns `None` on overflow.",N,N],[10,"checked_shl",E,r_Za,19,[[[r_ba],[r_Wa]],[r_ca]]],[8,r_gc,E,"Performs a right shift that returns `None` on overflow.",N,N],[10,"checked_shr",E,r_Za,20,[[[r_ba],[r_Wa]],[r_ca]]],[0,"inv",r_0a,E,N,N],[8,"Inv","num_traits::ops::inv","Unary operator for retrieving the multiplicative inverse,…",N,N],[16,r_3a,E,r_5a,21,N],[10,"inv",E,"Returns the multiplicative inverse of `self`.",21,N],[0,r_1a,r_0a,E,N,N],[8,r_hc,"num_traits::ops::mul_add",r_2a,N,N],[16,r_3a,E,"The resulting type after applying the fused multiply-add.",22,N],[10,r_1a,E,r_4a,22,N],[8,r_ic,E,"The fused multiply-add assignment operation.",N,N],[10,"mul_add_assign",E,r_4a,23,[[[r_ba],["a"],["b"]]]],[0,"saturating",r_0a,E,N,N],[8,r_jc,"num_traits::ops::saturating","Saturating math operations",N,N],[10,"saturating_add",E,"Saturating addition operator. Returns a+b, saturating at…",24,[[[r_ba],[r_ba]],[r_ba]]],[10,"saturating_sub",E,"Saturating subtraction operator. Returns a-b, saturating…",24,[[[r_ba],[r_ba]],[r_ba]]],[0,"wrapping",r_0a,E,N,N],[8,r_kc,"num_traits::ops::wrapping","Performs addition that wraps around on overflow.",N,N],[10,"wrapping_add",E,"Wrapping (modular) addition. Computes `self + other`,…",25,[[[r_ba],[r_ba]],[r_ba]]],[8,r_lc,E,"Performs subtraction that wraps around on overflow.",N,N],[10,"wrapping_sub",E,"Wrapping (modular) subtraction. Computes `self - other`,…",26,[[[r_ba],[r_ba]],[r_ba]]],[8,r_mc,E,"Performs multiplication that wraps around on overflow.",N,N],[10,"wrapping_mul",E,"Wrapping (modular) multiplication. Computes `self *…",27,[[[r_ba],[r_ba]],[r_ba]]],[8,r_nc,E,"Performs a left shift that does not panic.",N,N],[10,"wrapping_shl",E,"Panic-free bitwise shift-left; yields `self << mask(rhs)`,…",28,[[[r_ba],[r_Wa]],[r_ba]]],[8,r_oc,E,"Performs a right shift that does not panic.",N,N],[10,"wrapping_shr",E,"Panic-free bitwise shift-right; yields `self >>…",29,[[[r_ba],[r_Wa]],[r_ba]]],[0,"pow",r_aa,E,N,N],[5,"pow","num_traits::pow","Raises a value to the power of exp, using exponentiation…",N,[[[T],[r_ea]],[T]]],[5,"checked_pow",E,"Raises a value to the power of exp, returning `None` if an…",N,[[[T],[r_ea]],[r_ca]]],[8,"Pow",E,"Binary operator for raising a value to a power.",N,N],[16,r_3a,E,r_5a,30,N],[10,"pow",E,"Returns `self` to the power `rhs`.",30,N],[0,"real",r_aa,E,N,N],[8,"Real","num_traits::real","A trait for real number types that do not necessarily have…",N,N],[10,r_fa,E,r_ma,31,[[],[r_ba]]],[10,r_na,E,r_oa,31,[[],[r_ba]]],[10,r_pa,E,r_qa,31,[[],[r_ba]]],[10,r_ga,E,r_ra,31,[[],[r_ba]]],[10,r_Aa,E,r_Ba,31,[[[r_ba]],[r_ba]]],[10,r_6a,E,r_Ca,31,[[[r_ba]],[r_ba]]],[10,r_Da,E,r_Ea,31,[[[r_ba]],[r_ba]]],[10,r_Fa,E,r_Ga,31,[[[r_ba]],[r_ba]]],[10,r_Ha,E,r_Ia,31,[[[r_ba]],[r_ba]]],[10,"abs",E,r_Ja,31,[[[r_ba]],[r_ba]]],[10,r_Ka,E,r_La,31,[[[r_ba]],[r_ba]]],[10,r_Ma,E,r_7a,31,[[[r_ba]],[r_ha]]],[10,r_Na,E,r_8a,31,[[[r_ba]],[r_ha]]],[10,r_1a,E,r_2a,31,[[[r_ba],[r_ba],[r_ba]],[r_ba]]],[10,r_Oa,E,r_9a,31,[[[r_ba]],[r_ba]]],[10,r_ab,E,r_Pa,31,[[[r_ba],["i32"]],[r_ba]]],[10,"powf",E,"Raise a number to a real number power.",31,[[[r_ba],[r_ba]],[r_ba]]],[10,"sqrt",E,r_bb,31,[[[r_ba]],[r_ba]]],[10,"exp",E,r_cb,31,[[[r_ba]],[r_ba]]],[10,"exp2",E,r_db,31,[[[r_ba]],[r_ba]]],[10,"ln",E,r_eb,31,[[[r_ba]],[r_ba]]],[10,"log",E,r_fb,31,[[[r_ba],[r_ba]],[r_ba]]],[10,"log2",E,r_gb,31,[[[r_ba]],[r_ba]]],[10,r_hb,E,r_ib,31,[[[r_ba]],[r_ba]]],[10,r_Qa,E,r_jb,31,[[[r_ba]],[r_ba]]],[10,r_Ra,E,r_kb,31,[[[r_ba]],[r_ba]]],[10,"max",E,r_Sa,31,[[[r_ba],[r_ba]],[r_ba]]],[10,"min",E,r_Ta,31,[[[r_ba],[r_ba]],[r_ba]]],[10,r_lb,E,r_mb,31,[[[r_ba],[r_ba]],[r_ba]]],[10,"cbrt",E,r_nb,31,[[[r_ba]],[r_ba]]],[10,r_ob,E,r_pb,31,[[[r_ba],[r_ba]],[r_ba]]],[10,"sin",E,r_qb,31,[[[r_ba]],[r_ba]]],[10,"cos",E,r_rb,31,[[[r_ba]],[r_ba]]],[10,"tan",E,r_sb,31,[[[r_ba]],[r_ba]]],[10,"asin",E,r_tb,31,[[[r_ba]],[r_ba]]],[10,"acos",E,r_ub,31,[[[r_ba]],[r_ba]]],[10,"atan",E,r_vb,31,[[[r_ba]],[r_ba]]],[10,r_wb,E,r_xb,31,[[[r_ba],[r_ba]],[r_ba]]],[10,r_yb,E,r_zb,31,N],[10,r_Ab,E,r_Bb,31,[[[r_ba]],[r_ba]]],[10,r_Cb,E,r_Db,31,[[[r_ba]],[r_ba]]],[10,"sinh",E,r_Eb,31,[[[r_ba]],[r_ba]]],[10,"cosh",E,r_Fb,31,[[[r_ba]],[r_ba]]],[10,"tanh",E,r_Gb,31,[[[r_ba]],[r_ba]]],[10,r_Hb,E,r_Ib,31,[[[r_ba]],[r_ba]]],[10,r_Jb,E,r_Kb,31,[[[r_ba]],[r_ba]]],[10,r_Lb,E,r_Mb,31,[[[r_ba]],[r_ba]]],[0,"sign",r_aa,E,N,N],[5,"abs","num_traits::sign",r_Nb,N,[[[T]],[T]]],[5,r_lb,E,r_mb,N,[[[T],[T]],[T]]],[5,r_Ka,E,r_Ob,N,[[[T]],[T]]],[8,r_pc,E,"Useful functions for signed numbers (i.e. numbers that can…",N,N],[10,"abs",E,r_Nb,32,[[[r_ba]],[r_ba]]],[10,r_lb,E,r_mb,32,[[[r_ba],[r_ba]],[r_ba]]],[10,r_Ka,E,r_Ob,32,[[[r_ba]],[r_ba]]],[10,"is_positive",E,"Returns true if the number is positive and false if the…",32,[[[r_ba]],[r_ha]]],[10,"is_negative",E,"Returns true if the number is negative and false if the…",32,[[[r_ba]],[r_ha]]],[8,"Unsigned",E,"A trait for values which cannot be negative",N,N],[8,"Num",r_aa,"The base trait for numeric types, covering `0` and `1`…",N,N],[16,"FromStrRadixErr",E,E,33,N],[10,"from_str_radix",E,"Convert from a string and radix <= 36.",33,[[["str"],[r_Wa]],[r_Pb]]],[8,"NumOps",E,"The trait for types implementing basic numeric operations",N,N],[8,"NumRef",E,"The trait for `Num` types which also implement numeric…",N,N],[8,"RefNum",E,"The trait for references which implement numeric…",N,N],[8,"NumAssignOps",E,"The trait for types implementing numeric assignment…",N,N],[8,"NumAssign",E,"The trait for `Num` types which also implement assignment…",N,N],[8,"NumAssignRef",E,"The trait for `NumAssign` types which also implement…",N,N],[11,r_Qb,E,E,0,[[[U]],[r_Pb]]],[11,r_Rb,E,E,0,[[[T]],[T]]],[11,r_Sb,E,E,0,[[[r_ba]],[r_Pb]]],[11,r_sc,E,E,0,[[[r_ba]],[U]]],[11,r_Tb,E,E,0,[[[r_ba]],[T]]],[11,r_Ub,E,E,0,[[[r_ba]],[T]]],[11,r_Vb,E,E,0,[[[r_ba]],[r_Wb]]],[11,"to_string",E,E,0,[[[r_ba]],[r_rc]]],[11,r_Qb,E,E,1,[[[U]],[r_Pb]]],[11,r_Rb,E,E,1,[[[T]],[T]]],[11,r_Sb,E,E,1,[[[r_ba]],[r_Pb]]],[11,r_sc,E,E,1,[[[r_ba]],[U]]],[11,r_Tb,E,E,1,[[[r_ba]],[T]]],[11,r_Ub,E,E,1,[[[r_ba]],[T]]],[11,r_Vb,E,E,1,[[[r_ba]],[r_Wb]]],[11,"fmt",E,E,1,[[[r_ba],[r_Xb]],[r_Pb]]],[11,"fmt",E,E,0,[[[r_ba],[r_Xb]],[r_Pb]]],[11,"fmt",E,E,0,[[[r_ba],[r_Xb]],[r_Pb]]]],"p":[[3,r_Yb],[4,r_Zb],[8,r_0b],[8,r_1b],[8,r_2b],[8,r_3b],[8,r_4b],[8,r_5b],[8,r_6b],[8,r_7b],[8,"Zero"],[8,"One"],[8,r_8b],[8,r_9b],[8,r_ac],[8,r_bc],[8,r_cc],[8,r_dc],[8,r_ec],[8,r_fc],[8,r_gc],[8,"Inv"],[8,r_hc],[8,r_ic],[8,r_jc],[8,r_kc],[8,r_lc],[8,r_mc],[8,r_nc],[8,r_oc],[8,"Pow"],[8,"Real"],[8,r_pc],[8,"Num"]]};
searchIndex[r_qc]={"doc":r_wc,"items":[[3,r_vc,r_qc,r_xc,N,N],[11,"new",E,r_yc,0,[[["vec"]],[r_qc]]],[11,"eval",E,r_zc,0,[[[r_ba],[T]],[T]]],[11,"data",E,r_Ac,0,N],[11,r_Bc,E,r_Cc,0,[[[r_ba],["str"]],[r_rc]]],[11,r_Rb,E,E,0,[[[T]],[T]]],[11,r_sc,E,E,0,[[[r_ba]],[U]]],[11,r_Dc,E,E,0,[[[r_ba]],[T]]],[11,r_Ec,E,E,0,N],[11,r_Qb,E,E,0,[[[U]],[r_Pb]]],[11,r_Tb,E,E,0,[[[r_ba]],[T]]],[11,r_Ub,E,E,0,[[[r_ba]],[T]]],[11,r_Sb,E,E,0,[[[r_ba]],[r_Pb]]],[11,r_Vb,E,E,0,[[[r_ba]],[r_Wb]]],[11,"eq",E,E,0,[[[r_ba],[r_qc]],[r_ha]]],[11,"ne",E,E,0,[[[r_ba],[r_qc]],[r_ha]]],[11,r_Fc,E,E,0,[[[r_ba]],[r_qc]]],[11,"fmt",E,E,0,[[[r_ba],[r_Xb]],[r_Pb]]],[11,"sub",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"sub",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"add",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"add",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"mul",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"mul",E,E,0,[[[r_ba],[r_qc]],[r_qc]]],[11,"neg",E,E,0,[[[r_ba]],[r_qc]]],[11,r_tc,E,E,0,[[],[r_qc]]],[11,r_uc,E,E,0,[[[r_ba]],[r_ha]]],[11,"one",E,E,0,[[],[r_qc]]]],"paths":[[3,r_vc]]};
initSearch(searchIndex);addSearchOptions(searchIndex);